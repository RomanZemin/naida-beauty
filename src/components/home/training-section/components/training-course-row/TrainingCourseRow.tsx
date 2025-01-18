"use client";

import PlusSvg from "@/components/icons/PlusSvg";
import { TrainingCourse } from "../../training-section.interfaces";
import styles from "./training-course-row.module.scss";
import { useRef, useState } from "react";

const TrainingServicesRow = ({ course }: { course: TrainingCourse }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentEl = useRef<HTMLDivElement | null>(null);

  function handleHeadingClick() {
    setIsOpen(!isOpen);
  }

  return (
    <li className={styles["training-course-row"]} key={course.name}>
      <div
        className={styles["training-course-row__heading"]}
        onClick={handleHeadingClick}
      >
        <h3 className={styles["training-course-row__name"]}>{course.name}</h3>
        <button className={styles["training-course-row__trigger-button"]}>
          <PlusSvg
            className={`${styles["training-course-row__icon"]} ${isOpen ? styles["training-course-row__icon_rotated"] : ""
              }`}
          />
        </button>
      </div>
      <div
        ref={contentEl}
        className={styles["training-course-row__content"]}
        style={{ maxHeight: isOpen ? contentEl.current?.scrollHeight : "0px" }}
      >
        {course.topics &&
          course.topics.map((topic) => (
            <div
              key={topic.topicName}
              className={styles["training-course-row__topic-container"]}
            >
              <h4 className={styles["training-course-row__topic-name"]}>
                {topic.topicName}
              </h4>
              <ul className={styles["training-course-row__topic-list"]}>
                {topic.options.map((option, index) => {
                  if (typeof option === 'string') {
                    return <li key={index}>{option}</li>;
                  } else if (option.subOptions) {
                    return (
                      <li key={option.name}>
                        {option.name}
                        <ul>
                          {option.subOptions.map((subOption, subIndex) => (
                            <li key={subIndex} style={{ marginLeft: '8px' }}>{subOption}</li>
                          ))}
                        </ul>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          ))}
        {
          <div>
            {course.prices.length > 1 && (
              <span className={styles["training-course-row__price-title"]}>
                Стоимость обучения:{" "}
              </span>
            )}
            {course.prices.map((priceDetails, index) => (
              <div
                key={`priceDetails.label${index}`}
                className={styles["training-course-row__price-container"]}
              >
                <div className={styles["training-course-row__row"]}>
                  {priceDetails.label && (
                    <span
                      className={styles["training-course-row__price-option"]}
                    >
                      {priceDetails.label}
                    </span>
                  )}
                  {course.prices.length === 1 && (
                    <span
                      className={`${styles["training-course-row__price-option"]} ${styles["training-course-row__price-option_no-gap"]}`}
                    >
                      Стоимость обучения:{" "}
                    </span>
                  )}
                  <span className={styles["training-course-row__price-option"]}>
                    <strong>{priceDetails.price}</strong>
                  </span>
                </div>
                <span className={styles["training-course-row__price-option"]}>
                  Продолжительность обучения:{"  "}
                  <strong>{priceDetails.duration}</strong>
                </span>
                {priceDetails.notes && (
                  <div
                    className={
                      styles["training-course-row__price-notes-container"]
                    }
                  >
                    {priceDetails.notes.map((note) => (
                      <span
                        key={note}
                        className={
                          styles["training-course-row__price-notes-option"]
                        }
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        }
      </div>
    </li>
  );
};

export default TrainingServicesRow;
