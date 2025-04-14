import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Google Ads Search",
    image: "/images/certifications/googleads.png",
    issuer: "Google",
    year: "2025",
    description:
      "Expertise in der Erstellung und Optimierung von Google Suchanzeigen",
    link: "#",
  },
  {
    name: "Google Analytics",
    image: "/images/certifications/googleanalytics.png",
    issuer: "Google",
    year: "2024",
    description: "Professionelle Analyse und Auswertung von Website-Daten",
    link: "#",
  },
  {
    name: "Meta Blueprint",
    image: "/images/certifications/meta.png",
    issuer: "Meta",
    year: "2024",
    description:
      "Zertifizierte Expertise in Meta Ads und Social Media Marketing",
    link: "#",
  },
  {
    name: "HubSpot Inbound Marketing",
    image: "/images/certifications/hubspot.png",
    issuer: "HubSpot",
    year: "2024",
    description: "Spezialisierung auf Inbound Marketing Strategien",
    link: "#",
  },
  {
    name: "SEMrush SEO",
    image: "/images/certifications/semrush.png",
    issuer: "SEMrush",
    year: "2024",
    description:
      "Professionelle Suchmaschinenoptimierung und Content-Strategie",
    link: "#",
  },
];

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const visibleCertifications = 3; // Number of visible certifications on desktop

  const nextCertification = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevCertification = () => {
    setDirection("left");
    setActiveIndex(
      (prev) => (prev - 1 + certifications.length) % certifications.length,
    );
  };

  // Calculate visible certifications based on activeIndex
  const getVisibleCertifications = () => {
    const result = [];
    for (let i = 0; i < visibleCertifications; i++) {
      const index = (activeIndex + i) % certifications.length;
      result.push({
        ...certifications[index],
        position: i,
      });
    }
    return result;
  };

  const variants = {
    enter: (direction) => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction === "right" ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-brand-secondary/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/4"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-secondary text-sm font-medium mb-4">
              Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-scandia mb-6">
              Unsere
              <span className="relative mx-3 inline-block">
                <span className="relative z-10">Zertifizierungen</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-primary/30 -z-10 rounded"></span>
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Unsere Expertise wird durch offizielle Zertifizierungen und
              kontinuierliche Weiterbildung bestätigt
            </p>
          </motion.div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <div className="flex justify-center items-stretch gap-8">
            {getVisibleCertifications().map((cert, index) => (
              <motion.div
                key={`${cert.name}-${cert.position}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="w-1/3 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5"></div>
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="max-h-32 max-w-full object-contain relative z-10"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-secondary transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <span className="text-xs font-medium bg-brand-primary/10 text-brand-secondary px-2 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    Ausgestellt von {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-600 mb-6 flex-grow">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevCertification}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-dark hover:text-brand-secondary transition-colors duration-300 focus:outline-none"
            aria-label="Vorherige Zertifizierung"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextCertification}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-dark hover:text-brand-secondary transition-colors duration-300 focus:outline-none"
            aria-label="Nächste Zertifizierung"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? "right" : "left");
                  setActiveIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-brand-secondary w-6" : "bg-gray-300 hover:bg-gray-400"}`}
                aria-label={`Gehe zu Zertifizierung ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile view - grid layout */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="h-32 bg-gray-50 flex items-center justify-center p-4">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-base font-bold text-brand-dark">
                    {cert.name}
                  </h3>
                  <span className="text-xs font-medium bg-brand-primary/10 text-brand-secondary px-2 py-0.5 rounded-full">
                    {cert.year}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-2">
                  Ausgestellt von {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
