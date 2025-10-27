import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Share2,
  ArrowLeft,
  Phone,
  Shield,
  Zap,
  CheckCircle,
  Users,
  ClipboardList,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function OrdiCallAIBlogPost() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>
          KI-Telefonassistenten für Arztpraxen: Die Zukunft der Patientenkommunikation | WhitePeak Blog
        </title>
        <meta
          name="description"
          content="Erfahren Sie, wie KI-Telefonassistenten Arztpraxen revolutionieren. Terminbuchung, Rezeptverlängerung und Patientenbetreuung – 100% DSGVO-konform mit OrdiCall.ai."
        />
        <meta
          name="keywords"
          content="KI Telefonassistent, Arztpraxis Digitalisierung, Terminbuchung, Rezeptverlängerung, DSGVO, OrdiCall.ai, Healthcare Innovation"
        />
        <link
          rel="canonical"
          href="https://whitepeak.at/blog/ordicall-ai-revolutionizing-business-communication"
        />
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50/90 to-white py-24 sm:py-32">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-100/30 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

          <div className="container relative z-10">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <a
                  href="/blog"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 group"
                >
                  <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
                  Zurück zum Blog
                </a>

                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
                    Healthcare Innovation
                  </span>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>Dario & Bastian</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>15. Januar 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>5 Min. Lesezeit</span>
                  </div>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-scandia mb-6 text-gray-900">
                  KI-Telefonassistenten für Arztpraxen: Die Zukunft der Patientenkommunikation
                </h1>

                <p className="text-xl text-gray-700 leading-relaxed">
                  Überlastete Telefonleitungen, gestresste Praxismitarbeiter und frustrierte Patienten – ein alltägliches Szenario in deutschen Arztpraxen. Doch es gibt eine Lösung, die alle Beteiligten entlastet.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Featured Image */}
        <div className="container py-12">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80"
                  alt="KI-Telefonassistent für Arztpraxen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Article Content */}
        <div className="container pb-20">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Die Herausforderung in niedergelassenen Arztpraxen
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Jeder kennt es: Man ruft in der Arztpraxis an und landet in der Warteschleife. Oder noch schlimmer – niemand geht ans Telefon, weil das Praxisteam gerade mit Patienten beschäftigt ist. Für Arztpraxen ist die Telefonie eine der größten Herausforderungen im Praxisalltag.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Studien zeigen, dass Praxismitarbeiter bis zu 40% ihrer Arbeitszeit am Telefon verbringen – für Terminvereinbarungen, Rezeptverlängerungen und die Beantwortung wiederkehrender Fragen. Zeit, die für die direkte Patientenbetreuung fehlt.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Gleichzeitig steigen die Erwartungen der Patienten: Sie möchten schnell einen Termin vereinbaren, außerhalb der Sprechzeiten anrufen können und nicht minutenlang in der Warteschleife hängen. Eine scheinbar unlösbare Gleichung – bis jetzt.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    KI-Telefonassistenten: Die intelligente Lösung für Arztpraxen
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Künstliche Intelligenz revolutioniert die Patientenkommunikation. Moderne KI-Telefonassistenten können natürliche Gespräche führen, Patientenanliegen verstehen und eigenständig bearbeiten – rund um die Uhr und in perfekter Qualität.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl p-6 shadow-sm"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Terminbuchung</h3>
                      <p className="text-sm text-gray-600">
                        Automatische Terminvereinbarung mit direkter Kalenderintegration – 24/7 verfügbar.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-sm"
                    >
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                        <ClipboardList className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Rezeptverlängerung</h3>
                      <p className="text-sm text-gray-600">
                        Einfache Bearbeitung von Rezeptanfragen ohne Wartezeit für Patienten.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="bg-white rounded-xl p-6 shadow-sm"
                    >
                      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                        <Phone className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">FAQ-Beantwortung</h3>
                      <p className="text-sm text-gray-600">
                        Automatische Antworten auf häufige Fragen zu Öffnungszeiten, Leistungen etc.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    OrdiCall.ai: DSGVO-konforme KI für Ihre Praxis
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Als Co-Founder von <a href="https://ordicall.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium underline">OrdiCall.ai</a> haben wir, Dario und ich (Bastian), eine KI-Lösung entwickelt, die speziell auf die Bedürfnisse niedergelassener Arztpraxen zugeschnitten ist. Unser Fokus liegt dabei auf drei Säulen: Effizienz, Patientenzufriedenheit und Datenschutz.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <a href="https://ordicall.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium underline">OrdiCall.ai</a> ist zu 100% DSGVO-konform und erfüllt alle Anforderungen des Gesundheitsdatenschutzes. Alle Daten werden ausschließlich auf deutschen Servern verarbeitet und unterliegen strengsten Sicherheitsstandards.
                  </p>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                      Was OrdiCall.ai für Ihre Praxis leistet:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Automatische Terminbuchung:</strong> Patienten können rund um die Uhr Termine vereinbaren, die KI prüft Verfügbarkeiten und bucht direkt in Ihr Praxissystem
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Rezeptverlängerungen:</strong> Einfache Bearbeitung von Rezeptanfragen mit automatischer Weiterleitung an das Praxisteam
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>FAQ-Automatisierung:</strong> Beantwortung häufiger Fragen zu Öffnungszeiten, Leistungen, Anfahrt und mehr
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Intelligente Weiterleitung:</strong> Bei komplexen Anliegen erfolgt eine nahtlose Übergabe an Ihr Praxisteam
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>100% DSGVO-konform:</strong> Deutsche Server, höchste Datenschutzstandards, vollständige Compliance
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-emerald-50 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                      <Shield className="w-5 h-5 text-emerald-600 mr-2" />
                      Datenschutz hat oberste Priorität
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Als Arztpraxis unterliegen Sie besonderen Datenschutzanforderungen. <a href="https://ordicall.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium underline">OrdiCall.ai</a> wurde von Grund auf mit Fokus auf Datenschutz entwickelt:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></div>
                        Hosting ausschließlich auf deutschen Servern
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></div>
                        Ende-zu-Ende-Verschlüsselung aller Gespräche
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></div>
                        Keine Datenweitergabe an Dritte
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></div>
                        Vollständige DSGVO-Compliance und BAA-Vereinbarungen
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></div>
                        Regelmäßige Sicherheitsaudits und Zertifizierungen
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Messbare Erfolge für Arztpraxen
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Arztpraxen, die bereits KI-Telefonassistenten einsetzen, berichten von beeindruckenden Ergebnissen. Die Entlastung des Praxisteams und die verbesserte Patientenzufriedenheit sind dabei nur zwei von vielen Vorteilen.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-emerald-50 rounded-xl p-6">
                      <div className="text-3xl font-bold text-emerald-600 mb-2">-70%</div>
                      <p className="text-gray-700">Weniger Telefonanrufe für das Praxisteam</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-6">
                      <div className="text-3xl font-bold text-blue-600 mb-2">+90%</div>
                      <p className="text-gray-700">Steigerung der Patientenzufriedenheit</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-6">
                      <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                      <p className="text-gray-700">Erreichbarkeit ohne zusätzliches Personal</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-6">
                      <div className="text-3xl font-bold text-orange-600 mb-2">+60%</div>
                      <p className="text-gray-700">Mehr Zeit für die direkte Patientenbetreuung</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Die Zukunft der Praxiskommunikation beginnt jetzt
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Die Digitalisierung im Gesundheitswesen ist keine Zukunftsmusik mehr – sie ist Realität. Arztpraxen, die jetzt auf KI-gestützte Lösungen setzen, verschaffen sich einen entscheidenden Vorteil: Zufriedenere Patienten, entlastete Mitarbeiter und effizientere Prozesse.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Bei <a href="https://ordicall.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium underline">OrdiCall.ai</a> arbeiten wir täglich daran, die beste KI-Lösung für niedergelassene Arztpraxen zu entwickeln. Unser Ziel ist es, Ihnen mehr Zeit für das zu geben, was wirklich zählt: Die Betreuung Ihrer Patienten.
                  </p>

                  <div className="bg-blue-600 rounded-xl p-6 text-white">
                    <h3 className="font-bold text-xl mb-3">Interessiert an OrdiCall.ai?</h3>
                    <p className="mb-4 text-blue-100">
                      Erfahren Sie mehr über unseren KI-Telefonassistenten für Arztpraxen und wie er Ihre Praxis entlasten kann.
                    </p>
                    <Button
                      className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-6 py-3 group"
                      onClick={() => window.open("https://ordicall.ai", "_blank")}
                    >
                      <span className="flex items-center">
                        <span>Jetzt OrdiCall.ai entdecken</span>
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </article>

            {/* Share Section */}
            <ScrollReveal>
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600 font-medium">Artikel teilen:</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: document.title,
                            url: window.location.href,
                          });
                        }
                      }}
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Teilen
                    </Button>
                  </div>
                  <a
                    href="/blog"
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center group"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
                    Zurück zum Blog
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">
                Bereit für die digitale Transformation Ihrer Praxis?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam Ihre Praxiskommunikation auf das nächste Level bringen.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => (window.location.href = "/consultation")}
              >
                <span className="flex items-center">
                  <span>Kostenlose Beratung vereinbaren</span>
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}