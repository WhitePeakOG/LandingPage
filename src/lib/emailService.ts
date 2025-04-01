import { supabase } from "./supabase";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  services: string[];
  message: string;
  urgency?: string;
  budget?: string;
  newsletter?: boolean;
  createdAt: string;
}

export async function saveContactToDatabase(formData: ContactFormData) {
  try {
    // Save to Supabase
    const { data, error } = await supabase.from("contacts").insert([formData]);

    if (error) {
      console.error("Error saving contact to database:", error);
      return { success: false, error };
    }

    // Send notification email
    await sendNotificationEmail(formData);

    return { success: true, data };
  } catch (error) {
    console.error("Error in saveContactToDatabase:", error);
    return { success: false, error };
  }
}

async function sendNotificationEmail(formData: ContactFormData) {
  try {
    // Using Supabase Edge Functions to send email
    // You'll need to create this edge function in your Supabase project
    const { data, error } = await supabase.functions.invoke(
      "send-contact-notification",
      {
        body: {
          formData,
          recipient: "office@whitepeak.at", // Change to your email
          subject: `Neue Kontaktanfrage von ${formData.firstName} ${formData.lastName}`,
        },
      },
    );

    if (error) {
      console.error("Error sending notification email:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error in sendNotificationEmail:", error);
    return { success: false, error };
  }
}
