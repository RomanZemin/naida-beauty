import styles from "./training-section.module.scss";
import { trainingCourses } from "./training-section.constants";
import TrainingServicesRow from "./components/training-course-row/TrainingCourseRow";

const TrainingSection = () => {
  return (
    <section className={styles["training-section"]}>
      <h2 className={styles["training-section__title"]}>Обучение</h2>
      <ul>
        {trainingCourses.map((course) => (
          <TrainingServicesRow key={course.name} course={course} />
        ))}
      </ul>
    </section>
  );
};

export default TrainingSection;
