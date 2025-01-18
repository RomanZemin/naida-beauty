"use client";

// import ExportedImage from "next-image-export-optimizer";
import Image from "next/image";
import Slider from "react-slick";
import { feedbacks } from "./feedbacks-carousel.constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./feedbacks-carousel.module.scss";

const FeedbacksCarousel = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className={styles["feedbacks-carousel"]}>
      <Slider
        className={styles["feedbacks-carousel__slider"]}
        {...sliderSettings}
      >
        {feedbacks.map((feedback) => (
          <div
            key={feedback.imagePath}
            className={styles["feedbacks-carousel__content"]}
          >
            <div className={styles["feedbacks-carousel__image-wrapper"]}>
              <Image
                src={feedback.imagePath}
                alt={feedback.imagePath}
                fill={true}
                className={styles["feedbacks-carousel__image"]}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbacksCarousel;
