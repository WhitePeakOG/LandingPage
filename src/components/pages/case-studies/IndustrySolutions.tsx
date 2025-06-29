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
  Search,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function IndustrySolutionsCaseStudy() {
  const metrics = [
    {
      value: "+400%",
      label: "Organischer Traffic",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      value: "+150%",
      label: "Qualifizierte Leads",
      icon: TrendingUp,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      value: "Top 3",
      label: "Rankings für Kernkeywords",
      icon: BarChart3,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const challenges = [
    "Geringe Online-Sichtbarkeit trotz starker Marktposition",
    "Wenig organischen Traffic und niedrige Conversion-Raten",
    "Content-Strategie nicht auf Zielgruppe ausgerichtet",
    "Fehlende SEO-Optimierung und schwache Domain-Autorität",
  ];

  const solutions = [
    "Umfassende Keyword-Recherche und Content-Mapping",
    "Erstellung von hochwertigem, fachspezifischem Content",
    "Technische SEO-Optimierung und Website-Struktur",
    "Strategischer Linkaufbau in der Branche",
    "Kontinuierliches Monitoring und Content-Optimierung",
  ];

  const results = [
    "400% Steigerung des organischen Traffics",
    "Top-3-Rankings für 28 wichtige Branchenkeywords",
    "150% mehr qualifizierte Leads über die Website",
    "65% Steigerung der durchschnittlichen Verweildauer",
    "85% Zunahme der Domain-Autorität durch 120+ Backlinks",
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>
          Huber Signage Case Study | B2B Content & SEO Strategie | WhitePeak
        </title>
        <meta
          name="description"
          content="Erfahren Sie, wie WhitePeak durch SEO-optimierten Content und gezielte Backlink-Strategie den organischen Traffic für Huber Signage vervierfachen und die Anzahl der qualifizierten Leads deutlich steigern konnte."
        />
        <meta
          name="keywords"
          content="B2B SEO, Content Marketing, Backlink Strategie, Organischer Traffic, Lead Generation"
        />
        <link
          rel="canonical"
          href="https://whitepeak.at/case-studies/industrysolutions"
        />
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50/90 to-white py-24 sm:py-32">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-100/30 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

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
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 text-white p-5 mx-auto mb-8 shadow-lg shadow-emerald-200">
                  <Search className="w-10 h-10" />
                </div>

                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-scandia mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-blue-700 to-emerald-600">
                  Huber Signage
                </h1>

                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
                  B2B Content & SEO Strategie für nachhaltiges organisches
                  Wachstum
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                    SEO
                  </span>
                  <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                    Content Marketing
                  </span>
                  <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                    B2B
                  </span>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all duration-300 group"
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
                  Durch SEO-optimierten Content und gezielte Backlink-Strategie
                  konnten wir messbare Erfolge für Huber Signage erzielen
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
                    Huber Signage, ein führender Anbieter von Leuchtwerbung,
                    stand vor der Herausforderung, seine Online-Sichtbarkeit zu
                    verbessern und qualifizierte Leads zu generieren. Trotz
                    starker Marktposition war das Unternehmen online kaum
                    auffindbar.
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
                <div className="bg-emerald-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-emerald-800 flex items-center">
                    <Search className="mr-3 h-6 w-6" />
                    Unsere Lösung
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Wir entwickelten eine integrierte Content- und SEO-Strategie
                    mit Fokus auf Keyword-Recherche, hochwertigen Fachcontent
                    und strategischen Linkaufbau in der Branche.
                  </p>
                  <ul className="space-y-3">
                    {solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Results */}
            <ScrollReveal>
              <div className="mt-16 bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                  <TrendingUp className="mr-3 h-6 w-6" />
                  Die Ergebnisse
                </h3>
                <p className="text-gray-700 mb-6">
                  Nach 6 Monaten intensiver Arbeit an der Content- und
                  SEO-Strategie konnte Huber Signage beeindruckende Ergebnisse
                  verzeichnen.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.map((result, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
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
                    <div className="md:w-1/3 bg-gradient-to-br from-emerald-500 to-blue-600 p-8 flex flex-col justify-center relative overflow-hidden">
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
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=thomas"
                          alt="Thomas Weber"
                          className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-white/50"
                        />
                        <h4 className="text-white font-bold text-lg">
                          Thomas Weber
                        </h4>
                        <p className="text-white/80">Marketing Director</p>
                        <p className="text-white/80">Huber Signage</p>
                      </div>
                    </div>

                    <div className="md:w-2/3 p-8 md:p-12 flex items-center">
                      <blockquote>
                        <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
                          "Die Zusammenarbeit mit WhitePeak hat unsere
                          Online-Präsenz komplett transformiert. Wir werden
                          jetzt als Thought Leader in unserer Branche
                          wahrgenommen und generieren kontinuierlich hochwertige
                          Leads über unsere Website. Besonders beeindruckend
                          ist, dass wir nicht nur mehr Traffic erhalten, sondern
                          dass es sich um genau die richtige Zielgruppe handelt
                          – Entscheidungsträger, die aktiv nach unseren Lösungen
                          suchen."
                        </p>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-500">
                            Projekt abgeschlossen: November 2024
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
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">
                Bereit für ähnliche Erfolge?
              </h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam Ihr B2B-Unternehmen mit einer
                maßgeschneiderten Content- und SEO-Strategie zum Erfolg führen.
              </p>
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
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
