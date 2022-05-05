import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function HeroSwiper() {
  return (
    <Swiper
      className="HeroSwiper"
      modules={[Navigation, Pagination]}
      navigation
      loop
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
    >
      <SwiperSlide className="slide slide-1">
        <div className="slide-contents">
          <h1>Lorem ipsum dolor</h1>
          <p>Quem vide tincidunt pri ei, id mea omnium denique.</p>
          <button className="contact-us-button">Contact Us</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide slide-2">
        <div className="slide-contents">
          <h1>Lorem ipsum dolor</h1>
          <p>Quem vide tincidunt pri ei, id mea omnium denique.</p>
          <button className="contact-us-button">Contact Us</button>
        </div>
      </SwiperSlide>
      {/* <button className="leftArrow"><img src={arrowIcon} alt="left-arrow"></img></button>
      <button className="rightArrow"><img src={arrowIcon} alt="right-arrow"></img></button> */}
    </Swiper>
  );
}
