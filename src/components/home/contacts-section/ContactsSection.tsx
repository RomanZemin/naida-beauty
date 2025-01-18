import styles from "./contacts-section.module.scss";
import {
  IconBrandWhatsapp,
  IconBrandTelegram,
  IconMapSearch,
} from "@tabler/icons-react";
import { addresses } from "./contacts-section.constants";
import { Fragment } from "react";

const ContactsSection = () => {
  return (
    <section className={styles["contacts-section"]}>
      <h2 className={styles["contacts-section__title"]}>Контакты</h2>
      <div className={styles["contacts-section__content"]}>
        <div className={styles["contacts-section__item"]}>
          <span className={styles["contacts-section__icon-wrapper"]}>
            <IconMapSearch width={25} height={25} />
          </span>
          {addresses.map((address, index) => (
            <Fragment key={address}>
              <p className={styles["contacts-section__address-info"]}>
                {address}
              </p>
              {index + 1 !== addresses.length && (
                <hr className={styles["contacts-section__divider"]} />
              )}
            </Fragment>
          ))}
        </div>
        <a
          href="https://wa.me/79634233301"
          target="_blank"
          rel="noreferrer"
          className={styles["contacts-section__item"]}
        >
          <span className={styles["contacts-section__icon-wrapper"]}>
            <IconBrandWhatsapp width={25} height={25} />
          </span>
          <h4 className={styles["contacts-section__label"]}>Whatsapp</h4>
        </a>
        <a
          href="https://t.me/naidacosmo"
          target="_blank"
          rel="noreferrer"
          className={styles["contacts-section__item"]}
        >
          <span className={styles["contacts-section__icon-wrapper"]}>
            <IconBrandTelegram width={25} height={25} />
          </span>
          <h4 className={styles["contacts-section__label"]}>Telegram</h4>
        </a>
      </div>
    </section>
  );
};

export default ContactsSection;
