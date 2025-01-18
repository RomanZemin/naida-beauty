import HeroSection from "@/components/home/hero-section/HeroSection";
import styles from "./page.module.scss";
import PriceSection from "@/components/home/price-section/PriceSection";
import FeedbacksSection from "@/components/home/feedbacks-section/FeedbacksSection";
import ContactsSection from "@/components/home/contacts-section/ContactsSection";
import TrainingSection from "@/components/home/training-section/TrainingSection";

const Home = () => {
  return (
    <div className={styles["home"]}>
      <HeroSection />
      <PriceSection />
      <TrainingSection />
      <FeedbacksSection />
      <ContactsSection />
    </div>
  );
};

export default Home;
