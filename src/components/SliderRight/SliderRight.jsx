import React from "react";
import "./SliderRight.css";

const SliderRight = ({ title }) => {
  return (
    <div className="slider-right">
        <h1 style={{color:"#DBD3D8"}}>Welcome to my Portfolio!</h1>
        <p>Hello and thank you for visiting my website. My name is <b>Arnau</b>, and I am a dedicated <b>IT Manager </b>who recently embarked on an exciting journey into the world of <b>Full-Stack Development</b>.</p>

        <p>As someone who thrives on challenges and enjoys staying at the forefront of technological advancements, I made the decision to delve into the world of web development. Although I may not have extensive professional experience in this field just yet, my dedication and eagerness to learn have driven me to acquire a solid foundation in these technologies.</p>

        <p>My ultimate goal is to <b> combine my IT management expertise with my newfound development skills </b> to create innovative and efficient solutions that  <b> bridge the gap between technology and business needs</b>. I believe that my unique perspective and diverse skill set will allow me to bring a fresh approach to the ever-evolving IT landscape.</p>

        <p><b>Thank you for visiting</b>, and I look forward to connecting with you 😊</p>

        <div className="connect-icons">
            <a href="https://www.linkedin.com/in/arnau-rovira-ravetllat-6b777478/" target="_blank"><img className="image-link" src="/images/linkedin-logo.png" alt="linkedin-icon" /></a>
            <a href="https://github.com/Shieldman" target="_blank"><img className="image-link" src="/images/github-icon.png" alt="github-icon" /></a>
            <a href="mailto:arovirave@gmail.com" target="_blank"><img className="image-link" src="/images/mail-icon.png" alt="mail-icon" /></a>
        </div>

    </div>
  );
};

export default SliderRight;
