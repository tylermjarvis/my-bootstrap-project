import Header from "./Header";
import "../css/portfolio-custom.css";

// Images
import Event1 from "../assets/events/Events1.jpg";
import Event2 from "../assets/events/Events2.jpg";
import Event3 from "../assets/events/Events3.jpg";
import Event10 from "../assets/events/Events10.jpg";
import Event4 from "../assets/events/Events4.jpg";
import Event5 from "../assets/events/Events5.jpg";
import Event6 from "../assets/events/Events6.jpg";
import Event12 from "../assets/events/Events12.jpg";
import Event7 from "../assets/events/Events7.jpg";
import Event11 from "../assets/events/Events11.jpg";
import Event9 from "../assets/events/Events9.jpg";
import Event14 from "../assets/events/Events14.jpg";

const AvTech = () => {
  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      {/* <!--CV Content Section--> */}
      <section className="section-padding" id="avtechportfolio">
        <div className="container portfolio">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="content title text-center">AV Tech</h2>
            </div>
          </div>
          {/* <!--Image Grid--> */}
          <div className="container">
            <div id="avtech-grid" className="grid-padding">
              <div className="row portfolio">
                {/* <!--First Column--> */}
                <div className="col-sm-4">
                  <div className="row figure">
                    <img src={Event1} className="fit-image" alt="Event1" />
                    <div className="figcaption">
                      <h5 className="av description">
                        Boxing - At The Vodafone Event Centre
                      </h5>
                    </div>
                  </div>

                  <div className="row figure">
                    <img src={Event2} className="fit-image" alt="Event2" />
                    <div className="figcaption">
                      <h5 className="av description">
                        Hipstamatics - Small Stage
                      </h5>
                    </div>
                  </div>

                  <div className="row figure">
                    <img src={Event3} className="fit-image" alt="Event3" />
                    <div className="figcaption">
                      <h5 className="av description">
                        AXIS - Advertising Awards 2016
                      </h5>
                    </div>
                  </div>

                  <div className="row figure">
                    <img src={Event10} className="fit-image" alt="Event10" />
                    <div className="figcaption">
                      <h5 className="av description">
                        Motat - Hardware Awards 2016 - Lighting
                      </h5>
                    </div>
                  </div>
                </div>
                {/* <!--Second Column--> */}
                <div className="col-sm-4">
                  <div className="row figure">
                    <img src={Event4} className="fit-image" alt="Event4" />
                    <div className="figcaption">
                      <h5 className="av description">
                        Hipstamatics - Large Stage - Sound
                      </h5>
                    </div>
                  </div>

                  <div className="row figure">
                    <img src={Event5} className="fit-image" alt="Event5" />
                    <div className="figcaption">
                      <h5 className="av description">
                        Hipstamatics - Large Stage - Lighting
                      </h5>
                    </div>
                  </div>

                  <div className="row figure">
                    <img src={Event6} className="fit-image" alt="Event6" />
                    <div className="figcaption">
                      <h5 className="av description">
                        AXIS - Advertising Awards 2016 - Visual
                      </h5>
                    </div>
                  </div>

                  <div className="row figure">
                    <img src={Event12} className="fit-image" alt="Event12" />
                    <div className="figcaption">
                      <h5 className="av description">
                        ASB Showgrounds - Chinese New Year
                      </h5>
                    </div>
                  </div>
                </div>
                {/* <!--Third Column--> */}
                <div className="col-sm-4">
                  <div className="row figure">
                    <img src={Event7} className="fit-image" alt="Event7" />
                    <div className="figcaption">
                      <h5 className="av description">
                        Private Event - Outdoor Lighting
                      </h5>
                    </div>
                  </div>

                  <div className="row figure">
                    <img src={Event11} className="fit-image" alt="Event11" />
                    <div className="figcaption">
                      <h5 className="av description">
                        ASB Showgrounds <br /> - Chinese New Year - Truss
                      </h5>
                    </div>
                  </div>

                  <div className="row figure">
                    <img src={Event9} className="fit-image" alt="Event9" />
                    <div className="figcaption">
                      <h5 className="av description">
                        Motat - Hardware Awards 2016 - Visual
                      </h5>
                    </div>
                  </div>

                  <div className="row figure">
                    <img src={Event14} className="fit-image" alt="Event14" />
                    <div className="figcaption">
                      <h5 className="av description">The Langham Hotel</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AvTech;
