"use client";

import Image from "next/image";
import styles from "./hero-section.module.scss";
import * as motion from "framer-motion/client";

const HeroSection = () => {
  return (
    <motion.section
      className={styles["hero-section"]}
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ bounce: false }}
      viewport={{ once: true }}
    >
      <h1 className={styles["hero-section__title"]}>Наида Ризвановна</h1>
      <div className={styles["hero-section__image-wrapper"]}>
        <Image
          src="/images/main.jpg"
          height={0}
          width={0}
          sizes="100vw"
          alt="Нурахмедова Милана  Незершаховна"
          priority={true}
          className={styles["hero-section__image"]}
        />
      </div>
      <div className={styles["hero-section__overlay"]}>
        <div className={styles["hero-section__info-wrapper"]}>
          <motion.a
            href="https://wa.me/79634233301"
            target="_blank"
            rel="noreferrer"
            className={styles["hero-section__button"]}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ bounce: false }}
            viewport={{ once: true }}
          >
            Записаться на прием
          </motion.a>
          <p className={styles["hero-section__info"]}>
            По всем интересующим вас вопросам, а также по поводу записи на прием
            вы можете обращаться по номеру <br />
            <a href="tel:+79634233301" style={{ fontWeight: 700 }}>
              +7 (963) 423 3301
            </a>{" "}
            (отвечает администратор)
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;