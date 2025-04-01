// Follow the Supabase Edge Functions Quickstart to deploy this:
// https://supabase.com/docs/guides/functions/quickstart

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { formData, recipient, subject } = await req.json();

    // Format the email content
    const emailContent = `
      Neue Kontaktanfrage erhalten:
      
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Telefon: ${formData.phone}
      Unternehmen: ${formData.company || "Nicht angegeben"}
      
      Gewünschte Dienstleistungen: ${formData.services.join(", ")}
      
      Nachricht:
      ${formData.message}
      
      Dringlichkeit: ${formData.urgency || "Nicht angegeben"}
      Budget: ${formData.budget || "Nicht angegeben"}
      Newsletter abonniert: ${formData.newsletter ? "Ja" : "Nein"}
      
      Erhalten am: ${new Date(formData.createdAt).toLocaleString("de-AT")}
    `;

    // Get the API key from environment variables
    const apiKey = Deno.env.get("SENDGRID_API_KEY");
    if (!apiKey) {
      throw new Error("SENDGRID_API_KEY is not set");
    }

    // Send email using SendGrid API
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: recipient }],
            subject: subject,
          },
        ],
        from: {
          email: "noreply@whitepeak.at",
          name: "WhitePeak Kontaktformular",
        },
        content: [{ type: "text/plain", value: emailContent }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to send email: ${errorText}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
