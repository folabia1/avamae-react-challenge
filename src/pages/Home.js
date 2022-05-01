import React from "react";
import { LoginButton } from "../components/LoginButton";
import { LearnMoreButton } from "../components/LearnMoreButton";
import { HeroSwiper } from "../components/HeroSwiper";
import { LoremIpsum } from "react-lorem-ipsum";

import roomImage2 from "../media/shutterstock_696636415.jpg";
import { ContactUsButton } from "../components/ContactUsButton";

export function Home() {
  return (
    <div className="Home">
      <div className="heroSection">
        <HeroSwiper />
      </div>

      <div className="section2">
        <div>
          <h2>Justo petentium te vix,  scripta regione urbanitas</h2>
          <LoremIpsum startWithLoremIpsum={false}/>
          <ul>
            <li>Te pri efficiendi assueverit, idd molestie suavitate per</li>
            <li>Te nam dolorem rationibus repudiandae ne ius falli aliquip consetetur</li>
            <li>Ut qui dicant copiosae interpretaris</li>
            <li>Ut indoctum patrioque voluptaria duo, ut vis semper abhorreant</li>
          </ul>
          <LearnMoreButton />
        </div>
        <img src={roomImage2} alt="office-room" />
      </div>

      <div className="section3">
        <div className="textbox">
          <h2>Nulla sem urna, dictum sed nisi in, viverra rutrum neque</h2>
          <LoremIpsum startWithLoremIpsum={false}/>
          <LoginButton />
        </div>
      </div>

      <div className="section4">
        <h2>Sed libero justo, lobortis sit amer suscipit non</h2>
        <h3>taria duo ut semper abhorreant</h3>
        <strong><LoremIpsum startWithLoremIpsum={false}/></strong>
        <LoremIpsum p={2} startWithLoremIpsum={false}/>
        <ContactUsButton />
      </div>

    </div>
  )
}