import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

export function HeroSwiper() {
  const [bannerDetails, setBannerDeatils] = useState([]);
  const navigate = useNavigate();

  async function getBannerDetails() {
    // get data from api endpoint
    try {
      const rawResponse = await fetch(
        "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details",
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const readableResponse = await rawResponse.json();
      return {
        details: readableResponse["Details"],
        ok: readableResponse["Status"] === "1",
        errors: readableResponse["Errors"],
      };
    } catch (error) {
      console.log(error);
      return { ok: false };
    }
  }

  useEffect(() => {
    // on mount, get banner details from api
    getBannerDetails()
      .then((res) => {
        setBannerDeatils(res["details"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      {bannerDetails &&
        bannerDetails.map((slide, index) => {
          console.log(slide["ImageUrl"]);
          const slideStyle = {
            backgroundImage: `
            linear-gradient(
              to right,
              rgba(0, 0, 0, 0.8),
              rgba(0, 0, 0, 0.8) 12%,
              rgba(0, 0, 0, 0) 50%
            ), url(${slide["ImageUrl"]})`,
          };
          return (
            <SwiperSlide key={index} className="slide" style={slideStyle}>
              <div className="slide-contents">
                <h1>{slide["Title"]}</h1>
                <p>{slide["Subtitle"]}</p>
                <button
                  onClick={() => navigate("/contact-us")}
                  className="contact-us-button"
                >
                  Contact Us
                </button>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
