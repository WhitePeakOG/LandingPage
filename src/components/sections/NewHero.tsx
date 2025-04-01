import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewHero() {
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
    <section className="relative min-h-screen bg-[#0a0a0a] flex flex-col justify-center overflow-hidden pt-24 md:pt-32">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a0a0a] to-[#14112a]">
        <div className="absolute inset-0 opacity-30 bg-[url('/images/hero/hero-background.svg')]"></div>
      </div>

      {/* Animated gradient shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#756AF2]/20 to-[#94f3f6]/10 blur-[120px] z-0"
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
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#94f3f6]/10 to-[#756AF2]/20 blur-[100px] z-0"
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

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-20 flex flex-col h-full py-16 sm:py-24 md:py-36">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 sm:gap-12">
          {/* Left Column - Main Text */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
                Eine Agentur, die sich auf{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#756AF2] to-[#94f3f6]">
                  Marketing
                </span>{" "}
                spezialisiert
              </h1>

              <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Wir sind eine kreative Agentur mit verschiedenen
                Dienstleistungen, die sich auf Qualität und Innovationen für Ihr
                Unternehmen konzentrieren
              </p>

              <Button
                onClick={() => (window.location.href = "/consultation")}
                className="bg-[#94f3f6] hover:bg-[#756AF2] text-[#0a0a0a] hover:text-white font-medium rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all duration-300 group mx-auto lg:mx-0 flex"
              >
                <span className="flex items-center">
                  Jetzt starten
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Bar Graph */}
          <motion.div
            className="w-full lg:w-5/12 bg-[#14112a]/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-[#756AF2]/20 mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#94f3f6] mb-4 text-center">
                Wachstum durch digitales Marketing
              </h3>

              {/* Bar Graph Visualization */}
              <div className="mt-6 space-y-4">
                {/* Bar 1 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>Organischer Traffic</span>
                    <span>+320%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-[#94f3f6] h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>

                {/* Bar 2 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>Conversion Rate</span>
                    <span>+175%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-[#756AF2] h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </div>
                </div>

                {/* Bar 3 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>ROI</span>
                    <span>+250%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-purple-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                  </div>
                </div>

                {/* Bar 4 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>Brand Awareness</span>
                    <span>+210%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-pink-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "70%" }}
                      transition={{ duration: 1, delay: 1.1 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success Card */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-24 lg:mt-32 max-w-md mx-auto lg:mx-0 bg-[#14112a]/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#756AF2]/20 relative overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Ihr Unternehmen zu
          </h3>
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#756AF2] to-[#94f3f6]">
            ERFOLG FÜHREN
          </p>
          <div className="mt-4 flex items-end relative">
            <div className="w-1/3 h-8 bg-gray-700/50 rounded"></div>
            <div className="w-1/3 h-12 bg-gray-600/50 mx-2 rounded"></div>
            <div className="w-1/3 h-16 bg-[#94f3f6]/70 rounded relative">
              <div className="absolute -top-4 right-0 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center transform rotate-12">
                <span className="text-lg">★</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Client Logos */}
      <div className="relative z-20 mt-auto py-6 sm:py-8 bg-[#0a0a0a]/80 backdrop-blur-sm border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
            {["WhitePeak", "Kunden", "Logos", "Hier", "Einfügen"].map(
              (logo, index) => (
                <div key={index} className="text-gray-500 text-sm font-medium">
                  {logo}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
