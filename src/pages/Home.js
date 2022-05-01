import React from "react";
import { LoginButton } from "../components/LoginButton";
import { ContactUsButton } from "../components/ContactUsButton";
import { LearnMoreButton } from "../components/LearnMoreButton";
import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css';

import arrowIcon from "../media/Icon_Arrow.svg";
import roomImage1 from "../media/shutterstock_696636346.jpg";
import submitIcon from "../media/Icon_Submit.svg";
import validIcon from "../media/Icon_Valid.svg";
import companyIcon from "../media/Img_Contact.png";
import heroImageWoman from "../media/shutterstock_407632243.jpg";
import secondaryImageWoman from "../media/shutterstock_1302552622.jpg";
import roomImage2 from "../media/shutterstock_696636415.jpg";






export function Home() {
  return (
    <div className="Home">
      <div className="heroSection">
        <Swiper>
          <div className="heroSlider1"/>
          <div className="heroSlider2"/>
        </Swiper>

        <div className="heroContent">
          <button ><img className="leftArrow" src={arrowIcon} alt="left-arrow" /></button>
          <div className="heroText">
            <h1>Lorem ipsum dolor</h1>
            <p>Quem vide tincidunt pri ei, id mea omnium denique.</p>
            <button>Contact Us</button>
          </div>
          <button><img className="rightArrow" src={arrowIcon} alt="right-arrow" /></button>
        </div>
        <div className="imageSliderDots">
          {/* ... */}
        </div>
      </div>

      <div className="section2">
        <div>
          <h2>Justo petentium te vix,  scripta regione urbanitas</h2>
          <p>Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. ferri euismod accusata te nec, summo accumsan at vix. Ad vix legere impetus, nam consequat reformidans ut. No sit consul integre voluptatibus, omnium lucilius ne mel. Et ancillae recteque deterruisset sed, ea nec odio option, ferri assum eum et.</p>
          <ul>
            <li>Te pri efficiendi assueverit, idd molestie suavitate per</li>
            <li>Te nam dolorem rationibus repudiandae ne ius falli aliquip consetetur</li>
            <li>Ut qui dicant copiosae interpretaris</li>
            <li>Ut indoctum patrioque voluptaria duo, ut vis semper abhorreant</li>
          </ul>
          <LoginButton />
        </div>
        <img src={roomImage1} alt="office-room" />

      </div>

      <div className="section2">

      </div>

      <div className="section3">

      </div>

      <div className="section4">

      </div>

    </div>
  )
}