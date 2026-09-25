import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeServe from "@/components/WhoWeServe";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ForPropertyManagers from "@/components/ForPropertyManagers";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoWeServe />
        <Services />
        <WhyUs />
        <ForPropertyManagers />
        <ServiceArea />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
