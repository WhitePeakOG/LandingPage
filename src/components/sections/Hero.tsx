import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { smoothScroll } from "@/lib/smoothScroll";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative">
      {/* 3D Wave Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {/* Dark background with wave pattern */}
        <div className="absolute inset-0 bg-[#0a0a0a] z-0">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url('/images/hero/hero-background.svg')`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000000]/90 to-[#000000]/80 z-1"></div>

        {/* Animated gradient shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#756AF2]/20 to-[#94f3f6]/10 blur-[120px] z-2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#94f3f6]/10 to-[#756AF2]/20 blur-[100px] z-2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main Hero Section */}
      <div className="min-h-[100vh] relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative z-20 flex flex-col items-center justify-center min-h-[100vh]">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Logo or brandmark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="relative inline-block">
                <motion.div
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-[#756AF2] to-[#94f3f6] mx-auto flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 20px 5px rgba(117, 106, 242, 0.3)",
                      "0 0 30px 8px rgba(148, 243, 246, 0.5)",
                      "0 0 20px 5px rgba(117, 106, 242, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.span
                    className="text-[#14112a] font-bold text-3xl flex items-center justify-center"
                    animate={{
                      textShadow: [
                        "0 0 5px rgba(255, 255, 255, 0.5)",
                        "0 0 10px rgba(255, 255, 255, 0.7)",
                        "0 0 5px rgba(255, 255, 255, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    DIGITAL
                  </motion.span>
                </motion.div>
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#756AF2] to-[#94f3f6] opacity-30 blur-xl -z-10" />
              </div>
            </motion.div>

            {/* Main Heading with Animation */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                textShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                textShadow: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
            >
              <div className="block mb-2 relative">
                <span className="relative z-10">EFFIZIENTE</span>
                <motion.div
                  className="absolute -inset-1 bg-[#756AF2]/10 blur-sm rounded-lg -z-10"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <motion.div
                className="block text-transparent bg-clip-text bg-gradient-to-r from-[#756AF2] to-[#94f3f6] relative"
                animate={{
                  backgroundPosition: ["0% center", "100% center", "0% center"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ backgroundSize: "200% auto" }}
              >
                MARKETING
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#756AF2]/20 to-[#94f3f6]/20 blur-md rounded-lg -z-10"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              <motion.div
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 relative mt-2"
                animate={{
                  backgroundPosition: ["0% center", "100% center", "0% center"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                style={{ backgroundSize: "200% auto" }}
              >
                LÖSUNGEN
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-md rounded-lg -z-10"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>
            </motion.h1>

            {/* Slogan with Animation */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative mb-10"
            >
              <motion.p className="text-[#ece8fc] text-xl md:text-2xl max-w-3xl mx-auto font-light relative z-10">
                Wir helfen Unternehmen und persönlichen Marken, ihren Weg im
                digitalen Raum zu finden, indem wir
                <motion.span
                  className="text-[#94f3f6] font-medium mx-2"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  effiziente Strategien
                </motion.span>
                entwickeln und
                <motion.span
                  className="text-[#756AF2] font-medium mx-2"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  ihre Online-Präsenz
                </motion.span>
                stärken.
              </motion.p>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-[#756AF2]/5 to-[#94f3f6]/5 rounded-lg blur-md -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Stats Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-10"
            >
              <div className="flex justify-center items-center">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl px-8 py-4 border border-white/10">
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      45
                    </motion.div>
                    <div className="text-white/80 text-sm">
                      <div>aktive Kunden</div>
                      <div>kontinuierlich betreut</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#756AF2] to-[#94f3f6] rounded-full blur-md opacity-70"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [0.98, 1.02, 0.98],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Button
                  onClick={() => (window.location.href = "/consultation")}
                  className="relative bg-gradient-to-r from-[#756AF2] to-[#94f3f6] hover:opacity-90 text-[#14112a] font-medium rounded-full px-10 py-7 text-lg transition-all duration-300 group overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <span className="flex items-center relative z-10">
                    <span>KONTAKT</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="ml-2"
                    >
                      <ArrowRight className="h-6 w-6" />
                    </motion.span>
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 mx-auto w-fit z-20 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={() => smoothScroll("services")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="flex flex-col items-center text-[#ece8fc] relative"
          >
            <motion.span
              className="absolute -inset-4 bg-gradient-to-r from-[#756AF2]/10 to-[#94f3f6]/10 rounded-full blur-md"
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-sm font-medium mb-1 relative z-10">
              Mehr entdecken
            </span>
            <motion.div
              animate={{
                y: [0, 5, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Section Preview */}
      <div
        className="bg-[#0a0a0a] py-16 relative overflow-hidden mt-[-1px]"
        id="services"
      >
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] opacity-25" />

        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#756AF2]/10 rounded-full blur-3xl"
          animate={{
            x: [50, 0, 50],
            y: [-50, 0, -50],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#94f3f6]/10 rounded-full blur-3xl"
          animate={{
            x: [-50, 0, -50],
            y: [50, 0, 50],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#756AF2] to-[#94f3f6] mb-4 inline-block"
              animate={{
                backgroundPosition: ["0% center", "100% center", "0% center"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ backgroundSize: "200% auto" }}
            >
              Unsere Expertise
            </motion.h2>
            <p className="text-[#ece8fc]/80 max-w-2xl mx-auto">
              Wir kombinieren kreatives Design mit strategischer Planung, um
              Ihre Marke auf die nächste Stufe zu bringen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Branding",
                description:
                  "Wir entwickeln einzigartige Markenidentitäten, die Ihre Vision zum Leben erwecken.",
                icon: "✦",
                color: "from-blue-500 to-purple-500",
                hoverColor:
                  "group-hover:from-blue-400 group-hover:to-purple-400",
              },
              {
                title: "Web Design",
                description:
                  "Moderne, responsive Websites mit beeindruckender UX/UI für optimale Conversion.",
                icon: "◈",
                color: "from-purple-500 to-pink-500",
                hoverColor:
                  "group-hover:from-purple-400 group-hover:to-pink-400",
              },
              {
                title: "Digital Marketing",
                description:
                  "Datengetriebene Strategien für maximale Sichtbarkeit und Kundenbindung.",
                icon: "◇",
                color: "from-[#756AF2] to-[#94f3f6]",
                hoverColor:
                  "group-hover:from-[#756AF2] group-hover:to-[#94f3f6]",
              },
              {
                title: "Entwicklung",
                description:
                  "Maßgeschneiderte digitale Lösungen mit modernsten Technologien.",
                icon: "○",
                color: "from-emerald-500 to-blue-500",
                hoverColor:
                  "group-hover:from-emerald-400 group-hover:to-blue-400",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#756AF2]/20 rounded-xl p-6 group hover:shadow-lg hover:shadow-[#756AF2]/20 transition-all duration-500 relative overflow-hidden"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                />
                <motion.div
                  className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br opacity-20 rounded-full blur-3xl z-0"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                />
                <motion.div
                  className={`text-transparent bg-clip-text bg-gradient-to-br ${service.color} ${service.hoverColor} text-4xl mb-4 relative z-10`}
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.1, 1, 1.1, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-[#ece8fc] mb-2 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#756AF2] group-hover:to-[#94f3f6] transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-[#ece8fc]/70 relative z-10 group-hover:text-[#ece8fc]/90 transition-colors duration-300">
                  {service.description}
                </p>
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#756AF2] to-[#94f3f6] w-0 group-hover:w-full transition-all duration-500"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
