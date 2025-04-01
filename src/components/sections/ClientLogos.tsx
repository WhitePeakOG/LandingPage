import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Client logos from uploaded images
  const logos = [
    {
      id: 1,
      alt: "Pegasus Solution",
      src: "/images/clients/pegasus.png",
    },
    {
      id: 2,
      alt: "Sun Energy",
      src: "/images/clients/sun-energy.png",
    },
    {
      id: 3,
      alt: "Blocks Tech",
      src: "/images/clients/blocks.png",
    },
    {
      id: 4,
      alt: "Servas AI",
      src: "/images/clients/servas.png",
    },
  ];

  // Duplicate logos for continuous carousel effect
  const duplicatedLogos = [...logos, ...logos, ...logos];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-3">
            Unsere Kunden vertrauen uns
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wir arbeiten mit führenden Unternehmen in verschiedenen Branchen
            zusammen
          </p>
        </motion.div>

        <div ref={containerRef} className="relative overflow-hidden py-4">
          {/* Logo Carousel */}
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex items-center"
              animate={{
                x: ["-16.666%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex-shrink-0 mx-8 w-[150px] opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
}
