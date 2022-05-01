import React from "react";
import { ContactUsButton } from "./ContactUsButton";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";

import arrowIcon from "../media/Icon_Arrow.svg";

export function HeroSwiper() {
  return (
    <Swiper 
      modules={[Navigation, Pagination]}
      navigation
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
    >
      <SwiperSlide>
        <div className="heroSlide slide1">
          <h1>Lorem ipsum dolor1</h1>
          <p>Quem vide tincidunt pri ei, id mea omnium denique.</p>
          <ContactUsButton />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="heroSlide slide2">
          <h1>Lorem ipsum dolor1</h1>
          <p>Quem vide tincidunt pri ei, id mea omnium denique.</p>
          <ContactUsButton />
        </div>
      </SwiperSlide>
      <button className="leftArrow"><img src={arrowIcon} alt="left-arrow"></img></button>
      <button className="rightArrow"><img src={arrowIcon} alt="right-arrow"></img></button>
    </Swiper>
  )
}