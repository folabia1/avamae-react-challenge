import React from "react";
import { HeroSwiper } from "../components/HeroSwiper";
import { LoremIpsum } from "react-lorem-ipsum";

import roomImage2 from "../media/shutterstock_696636415.jpg";

export function Home() {
  return (
    <div className="Home">
      <div className="hero-section">
        <HeroSwiper />
      </div>

      <div className="section-2">
        <div>
          <h2>Justo petentium te vix, scripta regione urbanitas</h2>
          <LoremIpsum startWithLoremIpsum={false} />
          <strong>
            <ul>
              <li>Te pri efficiendi assueverit, idd molestie suavitate per</li>
              <li>
                Te nam dolorem rationibus repudiandae ne ius falli aliquip
                consetetur
              </li>
              <li>Ut qui dicant copiosae interpretaris</li>
              <li>
                Ut indoctum patrioque voluptaria duo, ut vis semper abhorreant
              </li>
            </ul>
          </strong>
          <button className="learn-more-button">Learn more</button>
        </div>
        <img src={roomImage2} alt="office-room" />
      </div>

      <div className="section-3">
        <div className="text-box">
          <h2>Nulla sem urna, dictum sed nisi in, viverra rutrum neque</h2>
          <LoremIpsum startWithLoremIpsum={false} />
          <button className="login-button">Log in</button>
        </div>
      </div>

      <div className="section-4">
        <h2>Sed libero justo, lobortis sit amer suscipit non</h2>
        <h3>taria duo ut semper abhorreant</h3>
        <div className="paragraphs">
          <strong>
            <LoremIpsum startWithLoremIpsum={false} />
          </strong>
          <LoremIpsum p={2} startWithLoremIpsum={false} />
        </div>
        <button className="contact-us-button">Contact Us</button>
      </div>
    </div>
  );
}
