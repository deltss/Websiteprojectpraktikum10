import styles from "./styles/home.module.css";
import HeroSection from "./components/herosection";
import ContactSection from "./components/contactsection";
import WorkSection from "./components/worksection";
import ServiceSection from "./components/servicesection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </>
  );
}