import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import AccredianEdge from "@/components/AccredianEdge";
import DomainExpertise from "@/components/DomainExpertise";
import CourseSegmentation from "@/components/CourseSegmentation";
import WhoShouldJoin from "@/components/WhoShouldJoin";
import CATFramework from "@/components/CATFramework";
import HowItWorks from "@/components/HowItWorks";
import FAQs from "@/components/FAQs";
import Testimonials from "@/components/Testimonials";
import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Clients />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegmentation />
      <WhoShouldJoin />
      <CATFramework />
      <HowItWorks />
      <FAQs />
      <Testimonials />
      <ContactBanner />
      <Footer />
    </main>
  );
}
