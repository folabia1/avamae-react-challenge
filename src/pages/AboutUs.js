import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import roomImage2 from "../media/shutterstock_696636415.jpg";

export function AboutUs() {
  return (
    <div className="AboutUs">
      <h1>About Us</h1>
      <strong>
        <LoremIpsum avgSentencesPerParagraph={2} startWithLoremIpsum={false} />
      </strong>
      <p>
        Lorem ipsum dolor sit atem, consectetur adipiscing elit. Nunc pulvinar
        enim sed quam efficitur finibus. Fusce efficitur condimentum orci in
        hendrerit. Etiam aliquam vitae ante et scelerisque. Pellentesque commodo
        felis metus, nec congue nisi facilisis quis. Aenean maximus bibendum
        congue. Nulla pretuim elit non facilisis imperdiet. Curabitur auctor
        lacus turpis, quis fringilla quam faucibus sed. Sed consequat magna
        enim, eu efficitur purus viverra sit amet.{" "}
        <a href="#">Praesent varius porta blandit</a> mollis, felis ut convallis
        convallis.
      </p>
      <LoremIpsum startWithLoremIpsum={false} />
      <img src={roomImage2} alt="" />
      <LoremIpsum startWithLoremIpsum={false} />
      <h2>Taria duo ut vis semper abhorreant:</h2>
      <strong>
        <ul>
          <li>Te pri efficiendi assueverit, id molestie suavitate per</li>
          <li>
            Te nam dolerm rationibus repudiandae, ne ius falli aliquip
            consetetur
          </li>
          <li>Ut qui dicant copiosae interpretaris</li>
          <li>Ut indoctum patrioque voluptaria duo, ut vis emper abhorreant</li>
        </ul>
      </strong>
      <LoremIpsum startWithLoremIpsum={false} />
      <LoremIpsum startWithLoremIpsum={false} />
    </div>
  );
}
