import About from "@/Components/AboutSection/about";
import Home from "@/Components/HomeSection/home";
import Service from "@/Components/ServiceSection/service";
import Pricing from "@/Components/PricingSection/pricing";
import CTA from "@/Components/CTASection/cta";
import Footer from "@/Components/Footer/footer";
import Process from "@/Components/ProcessSection/process";

export default function App() {
  return (
    <>
      <Home />
      <About />
      <Service />
      <Pricing />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}
