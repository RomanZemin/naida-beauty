import { ServiceOptions } from "../../price-section.interfaces";
import styles from "./service-row-options.module.scss";

const ServiceRowOptions = ({ options }: { options: ServiceOptions[] }) => {
  return (
    <ul className={styles["service-row-options"]}>
      {options.map((option) => (
        <li key={option.name} className={styles["service-row-options__option"]}>
          {option.name} {option.hasDash ? "-" : null} {option.price}
        </li>
      ))}
    </ul>
  );
};

export default ServiceRowOptions;
