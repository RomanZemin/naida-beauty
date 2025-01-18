"use client";

import ServiceRowOptions from "../service-row-options/ServiceRowOptions";
import { ServiceDetails } from "../../price-section.interfaces";
import styles from "./service-row.module.scss";
import * as motion from "framer-motion/client";

const ServiceRow = ({ service }: { service: ServiceDetails }) => (
  <li className={styles["service-row"]}>
    <motion.div
      className={styles["service-row__column"]}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ bounce: false }}
      viewport={{ once: true }}
    >
      <h3
        className={styles["service-row__name"]}
        dangerouslySetInnerHTML={{ __html: service.name }}
      />
    </motion.div>
    <motion.div
      className={styles["service-row__column"]}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ bounce: false }}
      viewport={{ once: true }}
    >
      {service.price && (
        <div className={styles["service-row__single-option"]}>
          {service.price}
        </div>
      )}
      {service.options && <ServiceRowOptions options={service.options} />}
    </motion.div>
  </li>
);

export default ServiceRow;
