import { Link } from "react-router-dom";
import "../css/portfolio-custom.css";
import HeroImage from "../assets/hero/AllambiStation1-1-Photoshopped.jpg";

var heroBackground = {
  backgroundImage: `url(${HeroImage})`,
};

const Hero = () => {
  return (
    <div className="hero" style={heroBackground}>
      <section id="hero">
        <div className="caption text-center text-light">
          <h1>Tyler Jarvis</h1>
          <ul className="social-media">
            <li>
              <Link
                to="https://www.facebook.com/"
                className="smed"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/"
                className="smed"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/"
                className="smed"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Hero;
