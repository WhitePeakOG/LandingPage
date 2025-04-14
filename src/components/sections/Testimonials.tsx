import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Julia Berger",
    position: "Marketing Director",
    company: "TechVision GmbH",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "WhitePeak hat unsere Online-Präsenz komplett transformiert. Durch ihre SEO-Strategie konnten wir unseren organischen Traffic um 320% steigern und die Conversion-Rate verdoppeln. Das Team ist nicht nur fachlich erstklassig, sondern auch äußerst engagiert und kommunikativ.",
    logo: "https://via.placeholder.com/150x50?text=TechVision",
  },
  {
    id: 2,
    name: "Markus Schneider",
    position: "CEO",
    company: "EcoStyle",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "Die Zusammenarbeit mit WhitePeak war ein Game-Changer für unser E-Commerce-Geschäft. Ihre Performance Marketing Kampagnen haben unseren ROAS von 2,1 auf 4,8 gesteigert. Besonders beeindruckend ist ihre datengetriebene Herangehensweise und die transparente Kommunikation.",
    logo: "https://via.placeholder.com/150x50?text=EcoStyle",
  },
  {
    id: 3,
    name: "Sarah Müller",
    position: "Head of Digital",
    company: "HealthPlus",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    rating: 4,
    text: "WhitePeak hat für uns eine Content-Strategie entwickelt, die perfekt auf unsere Zielgruppe zugeschnitten ist. Die Qualität der Inhalte ist hervorragend und hat zu einer deutlichen Steigerung der Engagement-Raten geführt. Das Team versteht es, komplexe Gesundheitsthemen verständlich und ansprechend aufzubereiten.",
    logo: "https://via.placeholder.com/150x50?text=HealthPlus",
  },
  {
    id: 4,
    name: "Martin Hausleitner",
    position: "Founder",
    company: "Servus.AI",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "Als Start-up waren wir auf der Suche nach einer Agentur, die uns dabei hilft, schnell Sichtbarkeit zu erlangen. WhitePeak hat nicht nur unsere Erwartungen übertroffen, sondern ist zu einem echten Partner geworden, der unser Geschäft versteht und mit uns wächst. Ihre Social Media Strategie hat uns geholfen, eine starke Community aufzubauen.",
    logo: "https://via.placeholder.com/150x50?text=Innovate",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-brand-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-secondary/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-secondary text-sm font-medium mb-4">
              Kundenstimmen
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-scandia mb-6">
              Was unsere
              <span className="relative mx-3 inline-block">
                <span className="relative z-10">Kunden</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-primary/30 -z-10 rounded"></span>
              </span>
              sagen
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Erfahren Sie, wie wir Unternehmen dabei helfen, ihre
              Marketingziele zu erreichen und nachhaltiges Wachstum zu erzielen
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="w-full flex-shrink-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    x: `${(index - activeIndex) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{
                    position: index === activeIndex ? "relative" : "absolute",
                    zIndex: index === activeIndex ? 1 : 0,
                  }}
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="md:flex">
                      {/* Left column with image and info */}
                      <div className="md:w-1/3 bg-gradient-to-br from-brand-secondary/90 to-brand-primary/90 p-8 flex flex-col justify-between relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0"
                          animate={{
                            background: [
                              "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%)",
                              "radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%)",
                              "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%)",
                            ],
                          }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
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

                        <div className="flex items-center mb-6 md:mb-0 relative z-10">
                          <motion.div
                            className="mr-4 relative"
                            whileHover={{ scale: 1.1 }}
                          >
                            <motion.div className="absolute -inset-1 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-full object-cover border-2 border-white/50 relative z-10"
                            />
                            <motion.div
                              className="absolute -top-1 -right-1 z-20"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.7, 1, 0.7],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.3,
                              }}
                            >
                              <Sparkles className="w-4 h-4 text-yellow-300" />
                            </motion.div>
                          </motion.div>
                          <div>
                            <motion.h3
                              className="text-white font-bold"
                              whileHover={{ scale: 1.05, x: 2 }}
                            >
                              {testimonial.name}
                            </motion.h3>
                            <p className="text-white/80 text-sm">
                              {testimonial.position}
                            </p>
                            <p className="text-white/80 text-sm">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>

                        <div className="relative z-10">
                          <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                animate={
                                  i < testimonial.rating
                                    ? {
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 5, -5, 0],
                                      }
                                    : {}
                                }
                                transition={
                                  i < testimonial.rating
                                    ? {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.2,
                                      }
                                    : {}
                                }
                              >
                                <Star
                                  className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-white/30"}`}
                                />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right column with testimonial text */}
                      <div className="md:w-2/3 p-8 md:p-12 flex items-center">
                        <blockquote>
                          <p className="text-lg text-gray-700 leading-relaxed italic">
                            "{testimonial.text}"
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation controls */}
          <div className="mt-10 flex items-center justify-between">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brand-dark hover:text-brand-secondary transition-colors duration-300 focus:outline-none"
              aria-label="Vorheriges Testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-brand-secondary scale-125" : "bg-gray-300 hover:bg-gray-400"}`}
                  aria-label={`Gehe zu Testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brand-dark hover:text-brand-secondary transition-colors duration-300 focus:outline-none"
              aria-label="Nächstes Testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
