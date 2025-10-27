import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet";

export default function Blog() {
  const blogPosts = [
    {
      id: "ordicall-ai-revolutionizing-business-communication",
      title: "KI-Telefonassistenten für Arztpraxen: Die Zukunft der Patientenkommunikation",
      excerpt: "Entdecken Sie, wie KI-gestützte Telefonassistenten Arztpraxen entlasten und die Patientenzufriedenheit steigern. Terminbuchung, Rezeptverlängerung und mehr – 100% DSGVO-konform.",
      author: "Dario & Bastian",
      date: "15. Januar 2025",
      readTime: "5 Min.",
      category: "Healthcare Innovation",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      gradient: "from-blue-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Blog | WhitePeak - Digital Marketing Insights & Trends</title>
        <meta
          name="description"
          content="Bleiben Sie auf dem Laufenden mit den neuesten Trends, Insights und Best Practices im Digital Marketing. Expertenwissen von WhitePeak."
        />
        <meta
          name="keywords"
          content="Digital Marketing Blog, Marketing Trends, SEO Tipps, Social Media Marketing, Content Marketing"
        />
        <link rel="canonical" href="https://whitepeak.at/blog" />
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50/90 to-white py-24 sm:py-32">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-100/30 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

          <div className="container relative z-10">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-scandia mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-700 to-blue-600">
                  WhitePeak Blog
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Insights, Trends und Best Practices im Digital Marketing
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="container py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={index * 0.1}>
                  <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2">
                    <a href={`/blog/${post.id}`} className="block">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-gray-800">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <div className="flex items-center">
                            <User className="w-3 h-3 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
                          <span>Weiterlesen</span>
                          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </a>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">
                Bereit für Ihr nächstes Projekt?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam Ihre digitale Präsenz auf das nächste Level bringen.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
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