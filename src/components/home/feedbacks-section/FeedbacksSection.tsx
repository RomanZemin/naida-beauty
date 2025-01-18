import styles from "./feedbacks-section.module.scss";
import FeedbacksCarousel from "./components/feedbacks-carousel/FeedbacksCarousel";

const FeedbacksSection = () => {
  return (
    <section className={styles["feedbacks-section"]}>
      <h2 className={styles["feedbacks-section__title"]}>Отзывы</h2>
      <FeedbacksCarousel />
    </section>
  );
};

export default FeedbacksSection;
