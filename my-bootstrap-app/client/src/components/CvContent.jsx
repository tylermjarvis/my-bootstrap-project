import "../css/portfolio-custom.css";
import CvImage from "../assets/cv-section/DSCF9913.jpg";

var CvBackground = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${CvImage})`,
};

const CvContent = () => {
  return (
    <div className="">
      <div id="cv about">
        <div className="container text-center about">
          <h3 className="heading">About</h3>
          <div className="col content">
            <p>
              I was a 2nd Stew on the 46m M/Y, Q95 and enjoyed providing the
              best for the amazing guests on board. I also have a strong
              hospitality and landscaping background and thoroughly enjoy
              maintaining gardens and outdoor work. I have always been very
              hands on and this is represented through my work history as a farm
              hand and general hand at a resort. I have a very enthusiastic
              attitude and approach everything I do with fun loving energy. I am
              a team player, friendly, focused, hard working, independent,
              out-going and passionate.
            </p>
          </div>
          <div className="content-underline"></div>
        </div>
      </div>
      <div className="cv qualifications" style={CvBackground}>
        <div className="container text-center qualifications">
          <div className="col qualifications">
            <h3 className="heading">Qualifications</h3>
          </div>
          <div className="col text-light content">
            <ul className="cv-list">
              <li>
                <p className="lead">AUT University</p>
              </li>
              <li>
                <p className="lead">2012-2014</p>
              </li>
              <li>
                <p className="lead">Bachelor of Communication Studies</p>
              </li>
              <li>
                <p className="lead">Major - Digital Media</p>
              </li>
              <li>
                <p className="lead">Minor - Advertising</p>
              </li>
            </ul>
          </div>
          <div className="content-underline"></div>
        </div>
      </div>
    </div>
  );
};

export default CvContent;
