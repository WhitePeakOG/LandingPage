import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ConsultationForm from "./components/pages/ConsultationForm";
import Impressum from "./components/pages/Impressum";
import Datenschutz from "./components/pages/Datenschutz";
import AGB from "./components/pages/AGB";
import CookiePolicy from "./components/pages/CookiePolicy";
import ContentMarketing from "./components/pages/services/ContentMarketing";
import SeoOptimierung from "./components/pages/services/SeoOptimierung";
import PerformanceMarketing from "./components/pages/services/PerformanceMarketing";
import SocialMediaMarketing from "./components/pages/services/SocialMediaMarketing";
import Webentwicklung from "./components/pages/services/Webentwicklung";
import TechStartCaseStudy from "./components/pages/case-studies/TechStart";
import FashionNowCaseStudy from "./components/pages/case-studies/FashionNow";
import IndustrySolutionsCaseStudy from "./components/pages/case-studies/IndustrySolutions";
import FluentlyFlexCoCaseStudy from "./components/pages/case-studies/FluentlyFlexCo";
import Blog from "./components/pages/Blog";
import OrdiCallAIBlogPost from "./components/pages/blog-posts/OrdiCallAI";
import CookieBanner from "./components/CookieBanner";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<ConsultationForm />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route
          path="/services/content-marketing"
          element={<ContentMarketing />}
        />
        <Route path="/services/seo-optimierung" element={<SeoOptimierung />} />
        <Route
          path="/services/performance-marketing"
          element={<PerformanceMarketing />}
        />
        <Route
          path="/services/social-media-marketing"
          element={<SocialMediaMarketing />}
        />
        <Route path="/services/webentwicklung" element={<Webentwicklung />} />
        <Route
          path="/case-studies/techstart"
          element={<TechStartCaseStudy />}
        />
        <Route
          path="/case-studies/fashionnow"
          element={<FashionNowCaseStudy />}
        />
        <Route
          path="/case-studies/industrysolutions"
          element={<IndustrySolutionsCaseStudy />}
        />
        <Route
          path="/case-studies/fluently-flexco"
          element={<FluentlyFlexCoCaseStudy />}
        />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog/ordicall-ai-revolutionizing-business-communication"
          element={<OrdiCallAIBlogPost />}
        />
      </Routes>
      <CookieBanner />
    </Suspense>
  );
}

export default App;