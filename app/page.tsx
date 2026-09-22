import Hero from "@/components/Hero";
import WhoWeServe from "@/components/WhoWeServe";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ServiceArea from "@/components/ServiceArea";
import ForPropertyManagers from "@/components/ForPropertyManagers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhoWeServe />
      <Services />
      <WhyUs />
      <ServiceArea />
      <ForPropertyManagers />
      <Contact />
      <Footer />
    </main>
  );
}
