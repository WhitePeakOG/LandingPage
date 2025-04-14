import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Cookie-Richtlinie | WhitePeak Digital Marketing</title>
        <meta
          name="description"
          content="Cookie-Richtlinie der WhitePeak Digital Marketing GmbH. Informationen zur Verwendung von Cookies auf unserer Website."
        />
      </Helmet>
      <Header />
      <main className="flex-grow container pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight font-scandia mb-8">
            Cookie-Richtlinie
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">
                1. Was sind Cookies?
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Cookies sind kleine Textdateien, die auf Ihrem Computer oder
                  mobilen Gerät gespeichert werden, wenn Sie unsere Website
                  besuchen. Sie ermöglichen es uns, Ihren Browser von anderen zu
                  unterscheiden und Informationen über Ihre Aktivitäten auf
                  unserer Website zu sammeln, um Ihr Nutzungserlebnis zu
                  verbessern.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                2. Welche Arten von Cookies verwenden wir?
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notwendige Cookies</h3>
                <p className="text-gray-600">
                  Diese Cookies sind für das Funktionieren unserer Website
                  unerlässlich. Sie ermöglichen grundlegende Funktionen wie die
                  Seitennavigation und den Zugriff auf sichere Bereiche der
                  Website. Die Website kann ohne diese Cookies nicht richtig
                  funktionieren.
                </p>

                <h3 className="text-lg font-medium">Analytische Cookies</h3>
                <p className="text-gray-600">
                  Diese Cookies helfen uns zu verstehen, wie Besucher mit
                  unserer Website interagieren, indem sie Informationen anonym
                  sammeln und melden. Sie helfen uns, unsere Website zu
                  verbessern und Ihr Nutzungserlebnis zu optimieren.
                </p>

                <h3 className="text-lg font-medium">Marketing-Cookies</h3>
                <p className="text-gray-600">
                  Diese Cookies werden verwendet, um Besucher auf Websites zu
                  verfolgen. Die Absicht ist, Anzeigen zu schalten, die relevant
                  und ansprechend für den einzelnen Benutzer sind und daher
                  wertvoller für Publisher und werbetreibende Drittparteien
                  sind.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                3. Wie können Sie Cookies kontrollieren?
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem
                  Sie auf den Link "Cookie-Einstellungen" am unteren Rand
                  unserer Website klicken. Darüber hinaus können Sie Cookies
                  über die Einstellungen Ihres Browsers verwalten. Bitte
                  beachten Sie, dass das Deaktivieren bestimmter Cookies die
                  Funktionalität unserer Website beeinträchtigen kann.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                4. Welche spezifischen Cookies verwenden wir?
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notwendige Cookies</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>
                    <strong>session</strong> - Wird verwendet, um Ihre Sitzung
                    zu verwalten.
                  </li>
                  <li>
                    <strong>cookie-consent</strong> - Speichert Ihre
                    Cookie-Präferenzen.
                  </li>
                </ul>

                <h3 className="text-lg font-medium">Analytische Cookies</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>
                    <strong>_ga</strong> - Google Analytics Cookie zur
                    Unterscheidung von Benutzern. Ablaufzeit: 2 Jahre.
                  </li>
                  <li>
                    <strong>_gid</strong> - Google Analytics Cookie zur
                    Unterscheidung von Benutzern. Ablaufzeit: 24 Stunden.
                  </li>
                  <li>
                    <strong>_gat</strong> - Google Analytics Cookie zur
                    Drosselung der Anforderungsrate. Ablaufzeit: 1 Minute.
                  </li>
                </ul>

                <h3 className="text-lg font-medium">Marketing-Cookies</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>
                    <strong>_fbp</strong> - Facebook Pixel Cookie für
                    Marketing-Zwecke. Ablaufzeit: 3 Monate.
                  </li>
                  <li>
                    <strong>_gcl</strong> - Google Conversion Linker Cookie für
                    Werbekampagnen. Ablaufzeit: 3 Monate.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                5. Änderungen an unserer Cookie-Richtlinie
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Wir behalten uns das Recht vor, diese Cookie-Richtlinie
                  jederzeit zu ändern. Alle Änderungen werden auf dieser Seite
                  veröffentlicht. Wir empfehlen Ihnen, diese Seite regelmäßig zu
                  besuchen, um über Änderungen informiert zu bleiben.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Kontakt</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Wenn Sie Fragen zu unserer Cookie-Richtlinie haben,
                  kontaktieren Sie uns bitte unter office@whitepeak.at oder über
                  unser Kontaktformular.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
