import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Layout,
  Smartphone,
} from "lucide-react";

export default function Webentwicklung() {
  const benefits = [
    {
      title: "Responsive Design",
      description:
        "Wir entwickeln Websites, die auf allen Geräten perfekt funktionieren und aussehen.",
      icon: Smartphone,
    },
    {
      title: "Modernes UI/UX Design",
      description:
        "Nutzerfreundliche Interfaces, die Ihre Besucher begeistern und zu Kunden machen.",
      icon: Layout,
    },
    {
      title: "Technische Exzellenz",
      description:
        "Sauberer, wartbarer Code und modernste Technologien für optimale Performance.",
      icon: Code,
    },
  ];

  const process = [
    {
      step: 1,
      title: "Analyse & Konzeption",
      description:
        "Wir analysieren Ihre Anforderungen und erstellen ein maßgeschneidertes Konzept.",
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description:
        "Wir gestalten das visuelle Erscheinungsbild und erstellen interaktive Prototypen.",
    },
    {
      step: 3,
      title: "Entwicklung & Testing",
      description:
        "Wir setzen das Design um und testen die Website auf allen Geräten und Browsern.",
    },
    {
      step: 4,
      title: "Launch & Support",
      description:
        "Wir veröffentlichen Ihre Website und bieten kontinuierlichen Support.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>
          Professionelle Webentwicklung | WhitePeak Digital Marketing
        </title>
        <meta
          name="description"
          content="Maßgeschneiderte Webentwicklung für Ihr Unternehmen. Responsive Design, moderne UI/UX und technische Exzellenz für optimale Conversion-Raten."
        />
        <meta
          name="keywords"
          content="Webentwicklung, Webdesign, UI/UX Design, Frontend-Entwicklung, CMS-Integration, Responsive Design, WhitePeak"
        />
        <link
          rel="canonical"
          href="https://whitepeak.at/services/webentwicklung"
        />
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-600/10 rounded-full blur-3xl"></div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
                  Webentwicklung
                </span>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-scandia mb-6">
                  Professionelle
                  <span className="relative mx-3 inline-block">
                    <span className="relative z-10">Webentwicklung</span>
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-indigo-500/30 -z-10 rounded"></span>
                  </span>
                  für Ihr Unternehmen
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                  Wir entwickeln maßgeschneiderte Websites, die nicht nur gut
                  aussehen, sondern auch Ihre Geschäftsziele unterstützen und zu
                  messbaren Ergebnissen führen.
                </p>
                <Button
                  onClick={() => (window.location.href = "/consultation")}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-lg transition-all duration-300 group"
                >
                  <span className="flex items-center">
                    Kostenlose Beratung
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold tracking-tight font-scandia mb-4">
                  Warum unsere Webentwicklung?
                </h2>
                <p className="text-gray-600">
                  Wir kombinieren technische Expertise mit kreativem Design, um
                  Websites zu entwickeln, die Ihre Besucher begeistern und zu
                  Kunden machen.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold tracking-tight font-scandia mb-4">
                  Unser Entwicklungsprozess
                </h2>
                <p className="text-gray-600">
                  Ein strukturierter Ansatz für erfolgreiche Webprojekte, der
                  Transparenz und Qualität in jeder Phase gewährleistet.
                </p>
              </motion.div>
            </div>

            <div className="relative">
              {/* Process timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-100 transform md:-translate-x-0.5"></div>

              <div className="space-y-12">
                {process.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div
                      className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                      <div className="flex-1 md:w-1/2 pb-8 md:pb-0 md:px-8">
                        <div
                          className={`bg-white p-6 rounded-xl shadow-sm ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold mr-4">
                              {item.step}
                            </div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                          </div>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 rounded-full bg-indigo-500 border-4 border-white transform -translate-x-1/2 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 md:w-1/2"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-indigo-600 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold tracking-tight font-scandia mb-6">
                  Bereit für Ihre neue Website?
                </h2>
                <p className="text-indigo-100 text-lg mb-8">
                  Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch
                  und erfahren Sie, wie wir Ihre Vision in die Realität umsetzen
                  können.
                </p>
                <Button
                  onClick={() => (window.location.href = "/consultation")}
                  className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8 py-6 text-lg transition-all duration-300 group"
                >
                  <span className="flex items-center">
                    Jetzt Kontakt aufnehmen
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
