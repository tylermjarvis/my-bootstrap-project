import Header from "./Header";
import "../css/portfolio-custom.css";

// Images
import CaramelTart from "../assets/cooking/Chocolate and Salted Caramel Tart-1.jpg";
import HomemadeBread from "../assets/cooking/IMG_20200423_145912.jpg";
import HalloumiSalad from "../assets/cooking/20151120_185228.jpg";
import NYCCookies from "../assets/cooking/IMG_20200829_151132.jpg";
import PotatoSalad from "../assets/cooking/20151130_180923_1.jpg";
import Sliders from "../assets/cooking/20160211_195536.jpg";
import GingerCake from "../assets/cooking/IMG_4186.jpg";
import BeefStirfry from "../assets/cooking/20151203_191413.jpg";
import FishChips from "../assets/cooking/20151123_190823_1.jpg";

const Cooking = () => {
  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      {/* <!--CV Content Section--> */}
      <section className="section-padding" id="cookingportfolio">
        <div className="container portfolio">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="content title text-center">Cooking</h2>
            </div>
          </div>
          {/* <!--Image Grid--> */}
          <div className="container">
            <div id="cooking-grid" className="grid-padding">
              <div className="row portfolio">
                {/* <!--First Column--> */}
                <div className="col-sm-4">
                  <div className="row figure">
                    <img
                      src={CaramelTart}
                      className="fit-image"
                      alt="Chocolate and Salted Caramel Tart"
                    />
                    <div className="figcaption">
                      <h5>Chocolate and Salted Caramel Tart</h5>
                    </div>
                  </div>

                  <div className="row figure">
                    <img
                      src={HomemadeBread}
                      className="fit-image"
                      alt="Homemade Bread"
                    />
                    <div className="figcaption">
                      <h5>Homemade Bread</h5>
                    </div>
                  </div>

                  <div className="row figure">
                    <img
                      src={HalloumiSalad}
                      className="fit-image"
                      alt="Chicken and Halloumi Salad"
                    />
                    <div className="figcaption">
                      <h5>Chicken and Halloumi Salad</h5>
                    </div>
                  </div>
                </div>
                {/* <!--Second Column--> */}
                <div className="col-sm-4">
                  <div className="row figure">
                    <img
                      src={NYCCookies}
                      className="fit-image"
                      alt="Chocolate Chip NYC Cookies"
                    />
                    <div className="figcaption">
                      <h5>Chocolate Chip NYC Cookies</h5>
                    </div>
                  </div>

                  <div className="row figure">
                    <img
                      src={PotatoSalad}
                      className="fit-image"
                      alt="Chilli Salmon, Asparagus and Horseradish Potato Salad"
                    />
                    <div className="figcaption">
                      <h5>
                        Chilli Salmon, Asparagus and Horseradish Potato Salad
                      </h5>
                    </div>
                  </div>

                  <div className="row figure">
                    <img
                      src={Sliders}
                      className="fit-image"
                      alt="Sliders and Wedges"
                    />
                    <div className="figcaption">
                      <h5>Sliders and Wedges</h5>
                    </div>
                  </div>
                </div>
                {/* <!--Third Column--> */}
                <div className="col-sm-4">
                  <div className="row figure">
                    <img
                      src={GingerCake}
                      className="fit-image"
                      alt="Sticky Pear, Date and Ginger Cake"
                    />
                    <div className="figcaption">
                      <h5>Sticky Pear, Date and Ginger Cake</h5>
                    </div>
                  </div>

                  <div className="row figure">
                    <img
                      src={BeefStirfry}
                      className="fit-image"
                      alt="Beef Stir-fry with Rice"
                    />
                    <div className="figcaption">
                      <h5>Beef Stirfry with Rice</h5>
                    </div>
                  </div>

                  <div className="row figure">
                    <img
                      src={FishChips}
                      className="fit-image"
                      alt="Crumbed Fish and Chips"
                    />
                    <div className="figcaption">
                      <h5>Crumbed Fish and Chips</h5>
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

export default Cooking;
