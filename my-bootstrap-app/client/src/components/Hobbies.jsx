import Boxing from "../assets/hobbies/BoxingLR.jpg";
import Dancing from "../assets/hobbies/DancingLR.jpg";
import Diving from "../assets/hobbies/DivingLR.jpg";
import DJing from "../assets/hobbies/DJingLR.jpg";
import Drumming from "../assets/hobbies/DrummingLR.jpg";
import Golfing from "../assets/hobbies/GolfingLR.jpg";
import Photography from "../assets/hobbies/PhotographyLR.jpg";
import Snowboarding from "../assets/hobbies/SnowboardingLR.jpg";
import Surfing from "../assets/hobbies/SurfingLR.jpg";
import Travelling from "../assets/hobbies/TravellingLR.jpg";
import WingTsun from "../assets/hobbies/WingTsunLR.jpg";
import WorkingOnCars from "../assets/hobbies/WorkingOnCarsLR.jpg";

const Hobbies = () => {
  return (
    <div className="">
      <section id="images">
        <div className="col-12 narrow text-center">
          <h3 className="hobbies">Hobbies</h3>
          <div className="row">
            <div className="col-md-2 col-sm-2 col-2">
              <div className="hovereffect">
                <img
                  src={Boxing}
                  className="img-fluid"
                  alt="Boxing for 2 years"
                />
                <div className="overlay">
                  <div className="d-none d-md-block">
                    <h2>
                      Boxing
                      <br />
                      For one year
                    </h2>
                  </div>
                  <div className="d-md-none">
                    Boxing
                    <br />
                    For 8 years
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-2">
              <div className="hovereffect">
                <img
                  src={WingTsun}
                  className="img-fluid"
                  alt="Wing Tsun (MMA) for 7 years"
                />
                <div className="overlay">
                  <div className="d-none d-md-block">
                    <h2>
                      Wing Tsun (MMA)
                      <br />
                      For seven years
                    </h2>
                  </div>
                  <div className="d-md-none">
                    Wing Tsun (MMA)
                    <br />
                    For 7 years
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-2">
              <div className="hovereffect">
                <img
                  src={Drumming}
                  className="img-fluid"
                  alt="Drumming for 7 years"
                />
                <div className="overlay">
                  <div className="d-none d-md-block">
                    <h2>
                      Drumming
                      <br />
                      For seven years
                    </h2>
                  </div>
                  <div className="d-md-none">
                    Drumming
                    <br />
                    For 7 years
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-2">
              <div className="hovereffect">
                <img src={DJing} className="img-fluid" alt="Djing" />
                <div className="overlay">
                  <div className="d-none d-md-block">
                    <h2>
                      DJing
                      <br />
                      For one year
                    </h2>
                  </div>
                  <div className="d-md-none">
                    DJing
                    <br />
                    For 1 year
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-2">
              <div className="hovereffect">
                <img src={Dancing} className="img-fluid" alt="Dancing" />
                <div className="overlay">
                  <div className="d-none d-md-block">
                    <h2>
                      Dancing
                      <br />
                      For one year
                    </h2>
                  </div>
                  <div className="d-md-none">
                    Dancing
                    <br />
                    For 1 year
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-2">
              <div className="hovereffect">
                <img
                  src={Golfing}
                  className="img-fluid"
                  alt="Golf for 8 years"
                />
                <div className="overlay">
                  <div className="d-none d-md-block">
                    <h2>
                      Golfing
                      <br />
                      For eight years
                    </h2>
                  </div>
                  <div className="d-md-none">
                    Golfing
                    <br />
                    For 8 years
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-2">
              <div className="hovereffect">
                <img
                  src={Snowboarding}
                  className="img-fluid"
                  alt="Snowboarding"
                />
                <div className="overlay">
                  <div className="d-none d-md-block">
                    <h2>
                      Snowboarding
                      <br />
                      One season
                    </h2>
                  </div>
                  <div className="d-md-none">
                    Snowboarder
                    <br />1 season
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-2">
              <div className="hovereffect">
                <img src={Surfing} className="img-fluid" alt="Surfing" />
                <div className="overlay">
                  <div className="d-none d-md-block">
                    <h2>
                      Surfing
                      <br />
                      For one year
                    </h2>
                  </div>
                  <div className="d-md-none">
                    Surfing
                    <br />
                    For 1 year
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-2">
              <div className="hovereffect">
                <img
                  src={Diving}
                  className="img-fluid"
                  alt="Diving (Instruction)"
                />
                <div className="overlay">
                  <div className="d-none d-md-block">
                    <h2>
                      Diving (Instruction)
                      <br />
                      Dived 15m
                    </h2>
                  </div>
                  <div className="d-md-none">
                    Diving (Instruction)
                    <br />
                    Dived 15m
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-2">
              <div className="hovereffect">
                <img
                  src={Photography}
                  className="img-fluid"
                  alt="Photography"
                />
                <div className="overlay">
                  <div className="d-none d-md-block">
                    <h2>
                      Photography
                      <br />
                      For three years
                    </h2>
                  </div>
                  <div className="d-md-none">
                    Photography
                    <br />
                    For 3 years
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-2">
              <div className="hovereffect">
                <img src={Travelling} className="img-fluid" alt="Travelling" />
                <div className="overlay">
                  <div className="d-none d-md-block">
                    <h2>
                      Travelling
                      <br />
                      For three years
                    </h2>
                  </div>
                  <div className="d-md-none">
                    Travelling
                    <br />
                    For 3 years
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-2">
              <div className="hovereffect">
                <img
                  src={WorkingOnCars}
                  className="img-fluid"
                  alt="Working on Cars"
                />
                <div className="overlay">
                  <div className="d-none d-md-block">
                    <h2>
                      Working on Cars
                      <br />
                      On and off
                    </h2>
                  </div>
                  <div className="d-md-none">
                    Working on Cars
                    <br />
                    On and off
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-underline"></div>
      </section>
    </div>
  );
};

export default Hobbies;
