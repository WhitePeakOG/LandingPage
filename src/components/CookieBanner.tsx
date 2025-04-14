import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie, ChevronDown, ChevronUp, Info } from "lucide-react";

type CookieType = {
  name: string;
  description: string;
  required: boolean;
};

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const cookieTypes: Record<string, CookieType[]> = {
    necessary: [
      {
        name: "session",
        description: "Wird verwendet, um Ihre Sitzung zu verwalten.",
        required: true,
      },
      {
        name: "cookie-consent",
        description: "Speichert Ihre Cookie-Präferenzen.",
        required: true,
      },
    ],
    analytics: [
      {
        name: "_ga",
        description:
          "Google Analytics Cookie zur Unterscheidung von Benutzern.",
        required: false,
      },
      {
        name: "_gid",
        description:
          "Google Analytics Cookie zur Unterscheidung von Benutzern.",
        required: false,
      },
    ],
    marketing: [
      {
        name: "_fbp",
        description: "Facebook Pixel Cookie für Marketing-Zwecke.",
        required: false,
      },
      {
        name: "_gcl",
        description: "Google Conversion Linker Cookie für Werbekampagnen.",
        required: false,
      },
    ],
  };

  useEffect(() => {
    // Check if consent was already given
    const savedConsent = localStorage.getItem("cookieConsent");
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      try {
        setConsent(JSON.parse(savedConsent));
      } catch (e) {
        setShowBanner(true);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const newConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setConsent(newConsent);
    localStorage.setItem("cookieConsent", JSON.stringify(newConsent));
    setShowBanner(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleOpenSettings = () => {
    setShowBanner(true);
    setShowDetails(true);
  };

  // Function to expose cookie settings to window object
  useEffect(() => {
    // @ts-ignore
    window.openCookieSettings = handleOpenSettings;
  }, []);

  const handleRejectAll = () => {
    const newConsent = {
      necessary: true, // Necessary cookies are always required
      analytics: false,
      marketing: false,
    };
    setConsent(newConsent);
    localStorage.setItem("cookieConsent", JSON.stringify(newConsent));
    setShowBanner(false);
  };

  const toggleConsent = (type: keyof CookieConsent) => {
    if (type === "necessary") return; // Cannot toggle necessary cookies
    setConsent({
      ...consent,
      [type]: !consent[type],
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white shadow-lg border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <Cookie className="h-6 w-6 text-brand-secondary mr-2" />
              <h3 className="text-lg font-semibold text-brand-dark">
                Cookie-Einstellungen
              </h3>
            </div>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-gray-500 hover:text-brand-secondary transition-colors duration-200 flex items-center text-sm font-medium"
            >
              {showDetails ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-1" /> Details ausblenden
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-1" /> Details anzeigen
                </>
              )}
            </button>
          </div>

          <p className="text-gray-600 text-sm">
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf
            unserer Website zu bieten. Einige Cookies sind für den Betrieb der
            Website erforderlich, während andere uns helfen, unsere Website zu
            verbessern und Ihnen relevante Inhalte anzuzeigen.
          </p>

          {showDetails && (
            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
              {Object.entries(cookieTypes).map(([category, cookies]) => (
                <div
                  key={category}
                  className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <h4 className="font-medium text-brand-dark capitalize">
                        {category === "necessary"
                          ? "Notwendige"
                          : category === "analytics"
                            ? "Analytische"
                            : "Marketing"}{" "}
                        Cookies
                      </h4>
                      {category === "necessary" && (
                        <span className="ml-2 text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
                          Erforderlich
                        </span>
                      )}
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={consent[category as keyof CookieConsent]}
                        onChange={() =>
                          toggleConsent(category as keyof CookieConsent)
                        }
                        disabled={category === "necessary"}
                      />
                      <div
                        className={`w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer ${consent[category as keyof CookieConsent] ? "peer-checked:bg-brand-secondary" : ""} after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${consent[category as keyof CookieConsent] ? "peer-checked:after:translate-x-full peer-checked:after:border-white" : ""} ${category === "necessary" ? "opacity-60" : ""}`}
                      ></div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">
                    {category === "necessary"
                      ? "Diese Cookies sind für das Funktionieren der Website erforderlich und können nicht deaktiviert werden."
                      : category === "analytics"
                        ? "Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren."
                        : "Diese Cookies werden verwendet, um Ihnen relevante Werbung anzuzeigen."}
                  </p>
                  <div className="space-y-2">
                    {cookies.map((cookie) => (
                      <div key={cookie.name} className="flex items-start">
                        <Info className="h-3 w-3 text-gray-400 mr-1 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-xs font-medium text-gray-700">
                            {cookie.name}
                          </span>
                          <p className="text-xs text-gray-500">
                            {cookie.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2 justify-end pt-2">
            <Button
              variant="outline"
              onClick={handleRejectAll}
              className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Alle ablehnen
            </Button>
            <Button
              variant="outline"
              onClick={handleAcceptSelected}
              className="border-brand-secondary text-brand-secondary hover:bg-brand-secondary/10"
            >
              Auswahl akzeptieren
            </Button>
            <Button
              onClick={handleAcceptAll}
              className="bg-brand-secondary hover:bg-brand-primary text-white"
            >
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
