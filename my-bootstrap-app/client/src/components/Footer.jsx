import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer" className="offset">
      <div className="row justify-content-center text-light">
        <div className="col-md-4 col-4 justify-content-center contact">
          <h6 className="footer contact">tjarvis1993@gmail.com</h6>
          <p>+64 21 130 7033</p>
        </div>
        <div className="col-md-4 col-4 justify-content-center social media">
          <Link to="https://www.facebook.com/" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="https://www.instagram.com/" target="_blank">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="https://www.linkedin.com/" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>
        <hr className="socket" />
        <div className="copy">&copy; Tyler Jarvis.</div>
      </div>
    </div>
  );
};

export default Footer;
