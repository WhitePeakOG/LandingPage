import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileDevice = window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Logos
  const logos = [
    {
      id: 1,
      alt: "Pegasus Solution",
      src: "/images/clients/pegasus.svg",
      href: "https://pegasus-solution.com",
    },
    {
      id: 2,
      alt: "Sun Energy",
      src: "/images/clients/huber.png",
      href: "https://huber-signage.eu",
    },
    {
      id: 3,
      alt: "Blocks Tech",
      src: "/images/clients/gruss.svg",
      href: "https://grusee.com",
    },
    {
      id: 4,
      alt: "Servas AI",
      src: "/images/clients/servas.svg",
      href: "https://servas.ai",
    },
    {
      id: 5,
      alt: "Softwarebude",
      src: "/images/clients/softwarebude.png",
      href: "https://softwarebude.at",
    },
    {
      id: 6,
      alt: "Fluently",
      src: "/images/clients/fluently.png",
      href: "https://fluently.at",
    },
    {
      id: 7,
      alt: "MichaelSoegner",
      src: "/images/clients/ms.svg",
      href: "https://michaelsoegner.com",
    },
    {
      id: 8,
      alt: "NanoPics",
      src: "/images/clients/nanopics.svg",
      href: "https://www.nano-pics.at",
    },
  ];

  // Animation duration (Mobile faster)
  const animationDuration = isMobile ? 25 : 45;

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
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex items-center"
              style={{ width: "max-content", willChange: "transform" }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  duration: animationDuration,
                  ease: "linear",
                  repeat: Infinity,
                },
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex-shrink-0 mx-4 sm:mx-8 w-[120px] sm:w-[150px]"
                >
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    aria-label={`Besuchen Sie ${logo.alt}`}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-16 w-[150px] object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </a>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
}
