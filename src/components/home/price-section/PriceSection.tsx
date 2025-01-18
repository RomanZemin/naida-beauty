import styles from "./price-section.module.scss";
import { services } from "./price-section.constants";
import ServiceRow from "./components/service-row/ServiceRow";

const PriceSection = () => {
  return (
    <section className={styles["price-section"]}>
      <h2 className={styles["price-section__title"]}>Прайс на услуги:</h2>
      <ul className={styles["price-section__list"]}>
        {services.map((service) => (
          <ServiceRow key={service.name} service={service} />
        ))}
      </ul>
    </section>
  );
};

export default PriceSection;
