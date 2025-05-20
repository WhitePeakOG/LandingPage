import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Layout,
  Code,
  PenTool,
  Layers,
  ArrowRight,
  CheckCircle,
  Zap,
  Smartphone,
  Globe,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const webServices = [
  {
    title: "Responsive Webdesign",
    icon: Smartphone,
    description:
      "Websites, die auf allen Geräten perfekt funktionieren und aussehen - vom Desktop bis zum Smartphone.",
    color: "indigo",
  },
  {
    title: "UI/UX Design",
    icon: PenTool,
    description:
      "Nutzerfreundliche Interfaces mit intuitiver Navigation und ansprechendem visuellen Design.",
    color: "indigo",
  },
  {
    title: "Frontend-Entwicklung",
    icon: Code,
    description:
      "Interaktive und dynamische Weboberflächen mit modernsten Technologien wie React, Vue.js oder Angular.",
    color: "indigo",
  },
  {
    title: "CMS-Integration",
    icon: Layers,
    description:
      "Benutzerfreundliche Content-Management-Systeme für einfache Pflege und Aktualisierung Ihrer Website.",
    color: "indigo",
  },
];

const stats = [
  { value: "98%", label: "Kundenzufriedenheit bei Webprojekten" },
  { value: "+45%", label: "durchschnittliche Steigerung der Conversion-Rate" },
  { value: "<1.5s", label: "Ladezeit für optimale Nutzererfahrung" },
];

export default function Webentwicklung() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section with Animated Background */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-indigo-50/90 to-white py-24 sm:py-32">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-primary/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

          {/* Animated code elements */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-16 h-16"
            animate={{
              y: [0, -15, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.path
                d="M30,20 L10,50 L30,80"
                stroke="#4f46e5"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="200"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              <motion.path
                d="M70,20 L90,50 L70,80"
                stroke="#4f46e5"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="200"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  duration: 2,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-1/3 left-1/5 w-24 h-24"
            animate={{
              y: [0, 20, 0],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.rect
                x="20"
                y="20"
                width="60"
                height="10"
                rx="2"
                fill="#4f46e530"
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 4 }}
              />
              <motion.rect
                x="20"
                y="40"
                width="40"
                rx="2"
                height="10"
                fill="#4f46e550"
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              />
              <motion.rect
                x="20"
                y="60"
                width="20"
                height="10"
                rx="2"
                fill="#4f46e570"
                initial={{ width: 0 }}
                animate={{ width: 20 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              />
            </svg>
          </motion.div>

          <div className="container relative z-10">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-5 mx-auto mb-8 shadow-lg shadow-indigo-200">
                  <Layout className="w-10 h-10" />
                </div>

                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-scandia mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-600">
                  Webentwicklung
                </h1>

                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Maßgeschneiderte Websites, die nicht nur gut aussehen, sondern
                  auch Ihre Geschäftsziele unterstützen und zu messbaren
                  Ergebnissen führen.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all duration-300 group"
                    onClick={() => (window.location.href = "/consultation")}
                  >
                    <span className="flex items-center">
                      <span>Kostenlose Beratung</span>
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-indigo-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="text-4xl font-bold text-indigo-600 mb-2">
                        {stat.value}
                      </div>
                      <p className="text-gray-700">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Unsere Webentwicklungs-Strategie
                </h2>

                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Wir entwickeln maßgeschneiderte Websites, die Ihre Marke
                  stärken, Ihre Zielgruppe begeistern und messbare
                  Geschäftsergebnisse liefern. Unser Fokus liegt auf
                  benutzerfreundlichem Design, technischer Exzellenz und
                  Conversion-Optimierung.
                </p>

                <div className="space-y-8">
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-indigo-500">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-lg font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          Analyse & Konzeption
                        </h3>
                        <p className="text-gray-700">
                          Wir analysieren Ihre Anforderungen, Zielgruppe und
                          Wettbewerber, um ein maßgeschneidertes Konzept zu
                          erstellen. Dabei definieren wir klare Ziele,
                          Funktionalitäten und die optimale Struktur für Ihre
                          Website.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-indigo-500">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-lg font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          Design & Prototyping
                        </h3>
                        <p className="text-gray-700">
                          Wir gestalten das visuelle Erscheinungsbild Ihrer
                          Website und erstellen interaktive Prototypen. Durch
                          iteratives Design und Nutzerfeedback optimieren wir
                          die Benutzerführung und sorgen für ein nahtloses
                          Nutzererlebnis.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-indigo-500">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-lg font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          Entwicklung & Optimierung
                        </h3>
                        <p className="text-gray-700">
                          Wir setzen das Design mit modernsten Technologien um
                          und optimieren Ihre Website für Suchmaschinen,
                          Geschwindigkeit und Conversion. Durch umfassendes
                          Testing stellen wir sicher, dass alles einwandfrei
                          funktioniert.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="sticky top-32">
                <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 shadow-xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

                  <h2 className="text-2xl font-bold mb-8 text-gray-900 relative z-10">
                    Unsere Web-Services
                  </h2>

                  <motion.div
                    className="space-y-6 relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {webServices.map((service, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                      >
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                            <service.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-1 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                              {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="mt-8 relative z-10">
                    <Button
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-6 shadow-md hover:shadow-lg transition-all duration-300 group"
                      onClick={() => (window.location.href = "/consultation")}
                    >
                      <span className="flex items-center justify-center">
                        <span>Jetzt beraten lassen</span>
                        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="container">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-4">
                  Messbare Ergebnisse
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-scandia mb-6">
                  Was Sie von unserer Webentwicklung erwarten können
                </h2>
                <p className="text-gray-700 text-lg">
                  Unsere Webentwicklungs-Strategien liefern konkrete, messbare
                  Ergebnisse für Ihr Unternehmen
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-indigo-500">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Optimale Nutzererfahrung
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Benutzerfreundliche Websites, die auf allen Geräten perfekt
                    funktionieren und Ihre Besucher begeistern.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                      <span>Responsive Design für alle Geräte</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                      <span>Intuitive Navigation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-indigo-500">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Technische Exzellenz
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Schnelle, sichere und technisch einwandfreie Websites mit
                    modernsten Technologien.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                      <span>Optimale Ladezeiten</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                      <span>Sicherheit nach aktuellen Standards</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-indigo-500">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Höhere Conversion
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Websites, die Besucher zu Kunden machen und Ihre
                    Geschäftsziele unterstützen.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                      <span>Conversion-optimierte Designs</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                      <span>Klare Call-to-Actions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-600 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">
                Bereit für Ihre neue Website?
              </h2>
              <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam eine maßgeschneiderte Website
                entwickeln, die Ihre Marke stärkt und messbare Ergebnisse
                liefert.
              </p>
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => (window.location.href = "/consultation")}
              >
                <span className="flex items-center">
                  <span>Kostenloses Website-Audit vereinbaren</span>
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
