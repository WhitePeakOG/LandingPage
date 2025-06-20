import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  ArrowRight,
  Search,
  TrendingUp,
  Target,
  CheckCircle,
  Quote,
  Calendar,
  Users,
  BarChart3,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function TechStartCaseStudy() {
  const metrics = [
    {
      value: "+250%",
      label: "Organischer Traffic",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      value: "+120%",
      label: "Qualifizierte Leads",
      icon: TrendingUp,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      value: "320%",
      label: "Return on Investment",
      icon: BarChart3,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const challenges = [
    "Geringe organische Sichtbarkeit in Suchmaschinen",
    "Unklare Keyword-Strategie und Content-Struktur",
    "Technische SEO-Probleme auf der Website",
    "Fehlende Backlink-Strategie und Domain Authority",
  ];

  const solutions = [
    "Umfassende SEO-Audit und technische Optimierung der Website",
    "Entwicklung einer datengetriebenen Keyword-Strategie",
    "Erstellung von SEO-optimiertem Content und Landing Pages",
    "Aufbau einer nachhaltigen Backlink-Strategie",
    "Kontinuierliches Monitoring und Optimierung der Rankings",
  ];

  const results = [
    "Organischen Traffic um 250% gesteigert",
    "Qualifizierte Leads um 120% erhöht",
    "Top 3 Rankings für wichtige Keywords erreicht",
    "Domain Authority signifikant verbessert",
    "ROI von 320% auf SEO-Investitionen erzielt",
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>
          Servas.AI Case Study | Google SEO Optimierung Erfolg | WhitePeak
        </title>
        <meta
          name="description"
          content="Erfahren Sie, wie WhitePeak durch strategische Google SEO Optimierung den organischen Traffic von Servas.AI um 250% steigerte und die Lead-Generierung um 120% erhöhte."
        />
        <meta
          name="keywords"
          content="Google SEO Case Study, SEO Optimierung, Organischer Traffic, Keyword Strategie, Technical SEO, Digital Marketing Erfolg"
        />
        <link
          rel="canonical"
          href="https://whitepeak.at/case-studies/techstart"
        />
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-green-50/90 to-white py-24 sm:py-32">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green-100/30 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

          {/* Animated SEO elements */}
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
                stroke="#10b981"
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
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-green-600 text-white p-5 mx-auto mb-8 shadow-lg shadow-blue-200">
                  <Search className="w-10 h-10" />
                </div>

                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-scandia mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-700 to-blue-600">
                  Servas.AI
                </h1>

                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
                  Google SEO Optimierung für nachhaltiges organisches Wachstum
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                    Google SEO
                  </span>
                  <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                    Technical SEO
                  </span>
                  <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                    Lead Generation
                  </span>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all duration-300 group"
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
                  Durch strategische Google SEO Optimierung konnten wir messbare
                  Erfolge für Servas.AI erzielen
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
                    Servas.AI, ein innovatives KI-Unternehmen, hatte trotz eines
                    hochwertigen Produkts Schwierigkeiten, online gefunden zu
                    werden. Die organische Sichtbarkeit war gering und
                    qualifizierte Leads über Suchmaschinen blieben aus.
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
                <div className="bg-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                    <Search className="mr-3 h-6 w-6" />
                    Unsere Lösung
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Wir entwickelten eine umfassende SEO-Strategie, die auf
                    technischer Optimierung, strategischem Content und
                    nachhaltiger Sichtbarkeitssteigerung basierte.
                  </p>
                  <ul className="space-y-3">
                    {solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
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
                  Innerhalb von 8 Monaten konnten wir die organische
                  Sichtbarkeit von Servas.AI dramatisch verbessern und
                  nachhaltiges Wachstum generieren.
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
                    <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-green-600 p-8 flex flex-col justify-center relative overflow-hidden">
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
                          src="https://framerusercontent.com/images/5NQU8748ZknSMl9iEyV5vT7viA.png?scale-down-to=512"
                          alt="Martin Hausleitner"
                          className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-white/50"
                        />
                        <h4 className="text-white font-bold text-lg">
                          Martin Hausleitner
                        </h4>
                        <p className="text-white/80">CEO</p>
                        <p className="text-white/80">Servas.AI</p>
                      </div>
                    </div>

                    <div className="md:w-2/3 p-8 md:p-12 flex items-center">
                      <blockquote>
                        <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
                          "WhitePeak hat unsere Online-Sichtbarkeit komplett
                          transformiert. Durch ihre strategische SEO-Arbeit
                          werden wir jetzt von unserer Zielgruppe gefunden und
                          konnten unsere Lead-Generierung mehr als verdoppeln.
                          Die Expertise im Bereich KI und Tech-SEO ist
                          beeindruckend. Eine Investition, die sich definitiv
                          gelohnt hat."
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
        <div className="bg-gradient-to-r from-blue-600 to-green-600 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">
                Bereit für ähnliche Erfolge?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam Ihre SEO-Strategie optimieren und
                nachhaltiges organisches Wachstum für Ihr Unternehmen erzielen.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => (window.location.href = "/consultation")}
              >
                <span className="flex items-center">
                  <span>Kostenlose SEO-Analyse vereinbaren</span>
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
