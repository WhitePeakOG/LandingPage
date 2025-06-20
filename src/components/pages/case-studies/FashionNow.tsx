import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  Target,
  CheckCircle,
  Quote,
  Calendar,
  Users,
  ShoppingCart,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function FashionNowCaseStudy() {
  const metrics = [
    {
      value: "+180%",
      label: "Return on Ad Spend",
      icon: BarChart3,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      value: "+75%",
      label: "Conversion-Rate",
      icon: TrendingUp,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      value: "+210%",
      label: "Qualifizierter Traffic",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
  ];

  const challenges = [
    "Niedrige Conversion-Raten trotz hoher Werbeausgaben",
    "Unzureichend optimierte Kampagnenstruktur",
    "Zu breite Zielgruppenansprache",
    "Ineffiziente Budgetallokation zwischen Kanälen",
  ];

  const solutions = [
    "Präzise Zielgruppenanalyse und -segmentierung",
    "Optimierung der Kampagnenstruktur und Anzeigengestaltung",
    "Implementierung von Conversion-Tracking und Remarketing",
    "Datengetriebene Budgetallokation und Gebotsstrategien",
    "A/B-Tests für Anzeigentexte, Bilder und Call-to-Actions",
  ];

  const results = [
    "180% Steigerung des ROAS über alle Werbekanäle",
    "75% Erhöhung der Conversion-Rate",
    "210% mehr qualifizierter Traffic auf der Website",
    "42% Reduktion der Cost-per-Acquisition (CPA)",
    "65% Steigerung des durchschnittlichen Bestellwerts",
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>
          Grusee Case Study | E-Commerce Performance Marketing | WhitePeak
        </title>
        <meta
          name="description"
          content="Erfahren Sie, wie WhitePeak durch optimierte Meta & Google Ads Kampagnen den ROAS um 180% steigern und die Conversion-Rate für Grusee um 75% erhöhen konnte."
        />
        <meta
          name="keywords"
          content="E-Commerce Performance Marketing, Meta Ads, Google Ads, ROAS Optimierung, Conversion Rate Optimierung"
        />
        <link
          rel="canonical"
          href="https://whitepeak.at/case-studies/fashionnow"
        />
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50/90 to-white py-24 sm:py-32">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-pink-100/30 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

          {/* Animated shopping elements */}
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
                d="M10,90 L30,60 L50,40 L70,20 L90,10"
                stroke="#a855f7"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="200"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </svg>
          </motion.div>

          <div className="container relative z-10">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 text-white p-5 mx-auto mb-8 shadow-lg shadow-purple-200">
                  <ShoppingCart className="w-10 h-10" />
                </div>

                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-scandia mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-700 to-purple-600">
                  Grusee
                </h1>

                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
                  E-Commerce Performance Marketing für nachhaltiges Wachstum
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                    Performance Marketing
                  </span>
                  <span className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium">
                    Google Ads
                  </span>
                  <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                    Meta Ads
                  </span>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all duration-300 group"
                    onClick={() => (window.location.href = "/consultation")}
                  >
                    <span className="flex items-center">
                      <span>Ähnliche Ergebnisse erzielen</span>
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Key Metrics Section */}
        <div className="bg-white py-20">
          <div className="container">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-scandia mb-6">
                  Beeindruckende Ergebnisse
                </h2>
                <p className="text-gray-700 text-lg">
                  Durch optimierte Meta & Google Ads Kampagnen konnten wir
                  messbare Erfolge für Grusee erzielen
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`${metric.bgColor} rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm`}
                    >
                      <metric.icon className={`w-8 h-8 ${metric.color}`} />
                    </div>
                    <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                      {metric.value}
                    </div>
                    <p className="text-gray-700 font-medium">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="container py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Challenge */}
              <ScrollReveal>
                <div className="bg-red-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-red-800 flex items-center">
                    <Target className="mr-3 h-6 w-6" />
                    Die Herausforderung
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Grusee, ein aufstrebender Online-Shop für nachhaltige Mode,
                    stand vor mehreren Herausforderungen im digitalen Marketing.
                    Trotz qualitativ hochwertiger Produkte blieben die
                    Conversion-Raten niedrig und die Werbeausgaben erzielten
                    nicht den gewünschten ROI.
                  </p>
                  <ul className="space-y-3">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Solution */}
              <ScrollReveal delay={0.2}>
                <div className="bg-purple-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-purple-800 flex items-center">
                    <ShoppingCart className="mr-3 h-6 w-6" />
                    Unsere Lösung
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Wir entwickelten eine maßgeschneiderte
                    Performance-Marketing-Strategie mit Fokus auf präzise
                    Zielgruppenanalyse, optimierte Kampagnenstruktur und
                    datengetriebene Budgetallokation.
                  </p>
                  <ul className="space-y-3">
                    {solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Results */}
            <ScrollReveal>
              <div className="mt-16 bg-emerald-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-emerald-800 flex items-center">
                  <TrendingUp className="mr-3 h-6 w-6" />
                  Die Ergebnisse
                </h3>
                <p className="text-gray-700 mb-6">
                  Nach drei Monaten intensiver Optimierung und kontinuierlicher
                  Anpassung der Strategie konnte Grusee beeindruckende
                  Ergebnisse verzeichnen.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.map((result, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-purple-500 to-pink-600 p-8 flex flex-col justify-center relative overflow-hidden">
                      <motion.div
                        className="absolute top-6 right-6"
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 0.9, 1],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Quote className="w-12 h-12 text-white/20" />
                      </motion.div>

                      <div className="text-center relative z-10">
                        <img
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=jakob"
                          alt="Jakob Gruss"
                          className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-white/50"
                        />
                        <h4 className="text-white font-bold text-lg">
                          Jakob Gruss
                        </h4>
                        <p className="text-white/80">CEO</p>
                        <p className="text-white/80">Grusee</p>
                      </div>
                    </div>

                    <div className="md:w-2/3 p-8 md:p-12 flex items-center">
                      <blockquote>
                        <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
                          "Die Zusammenarbeit mit WhitePeak hat unsere
                          Erwartungen übertroffen. Nicht nur die
                          Performance-Kennzahlen haben sich dramatisch
                          verbessert, sondern wir haben auch wertvolle Einblicke
                          in unser Kundenverhalten gewonnen. Der datengetriebene
                          Ansatz und die kontinuierliche Optimierung haben uns
                          geholfen, unsere Marketingausgaben effizienter
                          einzusetzen und gleichzeitig den Umsatz deutlich zu
                          steigern."
                        </p>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-500">
                            Projekt abgeschlossen: Dezember 2024
                          </span>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">
                Bereit für ähnliche Erfolge?
              </h2>
              <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam Ihre E-Commerce Performance Marketing
                Strategie optimieren und nachhaltiges Wachstum für Ihr
                Unternehmen erzielen.
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
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
