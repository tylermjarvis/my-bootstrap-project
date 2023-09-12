import Header from "./Header";
import "../css/portfolio-custom.css";

// Images
import VectorDesign from "../assets/design/EGO TAGS Idea 5.jpg";
import LogoDesign from "../assets/design/EGO TAGS Idea 8.jpg";
import PhotoshopMasking from "../assets/design/Living Room Panther.jpg";
import Brochure1 from "../assets/design/BackpackerCarBrochure1.jpg";
import Brochure2 from "../assets/design/BackpackerCarBrochure2.jpg";
import OnlineMarketing from "../assets/design/Website Marketing Example.jpg";

const Portfolio = () => {
  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      {/* <!--CV Content Section--> */}
      <div id="designsection">
        <div className="container design">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="content title text-center">Design</h2>
            </div>
          </div>
          <div className="container design section">
            <div className="row">
              <div className="col">
                <div className="vector col design content">
                  <h1 className="number font-weight-bold">01</h1>
                  <h3 className="project title font-weight-bold">
                    EGO Tags Vector Design
                  </h3>
                  <p className="description">
                    This vector design was created using Adobe Illustrator and
                    was a side project for a mock-up pet tag business. The idea
                    behind the image was to represent that of the product, in a
                    way that would mimic the design of the locket styled pet
                    tag. The criteria for the design was to create a more
                    personal image that the target audience (families) could
                    relate to.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="row design picture justify-content-center">
                  <img
                    src={VectorDesign}
                    className="vector fit-image"
                    alt="Vector Design"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="design content-underline"></div>

          <div className="container design section">
            <div className="row">
              <div className="col">
                <div className="row design picture justify-content-center">
                  <img
                    src={LogoDesign}
                    className="logo fit-image"
                    alt="LogoDesign"
                  />
                </div>
              </div>
              <div className="col">
                <div className="logo col design content">
                  <h1 className="number font-weight-bold">02</h1>
                  <h3 className="project title font-weight-bold">
                    EGO Tags Logo Design
                  </h3>
                  <p className="description">
                    This design was created using Adobe Illustrator and was also
                    for the moc-up business project. This is more of a logo
                    approach with its minimilistic designs, suitable for a logo.
                    It follows the same idea of mimicking the product itsef, as
                    well engulfing the personal feel of the product. Colours are
                    simple, yet dark and effective. The font is readable and
                    follows the shape of the picture.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="design content-underline"></div>

          <div className="container design section">
            <div className="row">
              <div className="col">
                <div className="col design content">
                  <h1 className="number font-weight-bold">03</h1>
                  <h3 className="project title font-weight-bold">
                    Gramophone In Aotea Square
                  </h3>
                  <p className="description">
                    This project was completed during University as my 3D
                    Modelling project, using Cinema 4D. For this project we had
                    to create a shape that would then be placed in an urban
                    recreational area. It therefore needed to follow the shadows
                    and lighting of the existing structure. I chose a gramophone
                    as as the shapes are both difficult, yet rewarding. This
                    project allowed me to understand the elements, such as
                    lighting that really create a convincing video.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="row design video justify-content-center">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      src="https://www.youtube.com/embed/GIj9DYvmuVE?rel=0"
                      width="560"
                      height="315"
                      // frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="design content-underline"></div>

          <div className="container design section">
            <div className="row">
              <div className="col">
                <div className="row design video justify-content-center">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      src="https://www.youtube.com/embed/dDZbUfj6-jE?rel=0"
                      width="560"
                      height="315"
                      // frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="col design content">
                  <h1 className="number font-weight-bold">04</h1>
                  <h3 className="project title font-weight-bold">Strings</h3>
                  <p className="description">
                    Strings was a Universtity project and was one of my
                    assignments for the Video Production className. It follows
                    the performance of a Busker. For this project we were
                    introduced to video production as a whole. The filming,
                    sound quality and public permisssion. We really focused on
                    what film techniques would portray a strong, uplifting and
                    community feel. The representation of the effort and
                    positive feeling from the busker was shown through camera
                    angles and how that energy is rippled towards her audience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="design content-underline"></div>

          <div className="container design section">
            <div className="row">
              <div className="col">
                <div className="col design content">
                  <h1 className="number font-weight-bold">05</h1>
                  <h3 className="project title font-weight-bold">
                    Television Panther
                  </h3>
                  <p className="description">
                    The Television Panther was a quick project that involves the
                    use of Adobe Photoshop. I have alway been curious in the
                    portayal of what is there and what is not. It uses two
                    pictures, one of a family in their living room and another
                    of a black panther. The focus was on the use of the masking
                    tools in Photoshop to adjust the lighting of the two images
                    to not only blend them, but give the feel that the picture
                    of the TV is extending into the living room.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="row design picture justify-content-center">
                  <img
                    src={PhotoshopMasking}
                    className="panther fit-image"
                    alt="Photoshop masking"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="design content-underline"></div>

          <div className="container design section">
        	<div className="row">
        		<div className="col">
            		<div className="row design picture justify-content-center">
  							<img src="G:\Portfolio\Web Design Projects\Bootstrap\TylersPortfolio\Design\Elephant on the Beach_Effect1.jpg" className="elephant fit-image" alt="Photoshop Blend">
					</div>
                </div>
                <div className="col">
            		<div className="col design content">
                        <h1 className="number font-weight-bold">06</h1>
                        	<h3 className="project title font-weight-bold">Elephant On The Beach</h3>
    							<p className="description">'Elephant On The Beach' is another example of my work with Adobe Photoshop. This project follows the use of filters in Adobe Lightroom to blend both images together, as well as reflections and shadows in Photoshop to give a natural feel as if the Elephant was really in that location. It is important that the selection of images are taken into account as they need to be very similar in order to create this feel.</p>
    				</div>
        		</div>
           </div>
      </div> */}

          <div className="design content-underline"></div>

          <div className="container design section">
            <div className="row">
              <div className="col">
                <div className="col design content">
                  <h1 className="number font-weight-bold">07</h1>
                  <h3 className="project title font-weight-bold">
                    Backpacker Cars Brochure
                  </h3>
                  <p className="description">
                    Using Adobe InDesign, in exchange for work on our car, my
                    partner and I created a brochure for the mechanic company
                    Backpacker Cars. They wanted this brochure to appeal to
                    backpackers who would like to travel Australia via car. The
                    idea was to be more of a helping guide that would prepare
                    backpackers for the long journey ahead. Therefore the
                    copywriting and layout was very important, in order to make
                    it easy to follow.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="row design picture justify-content-center">
                  <div
                    id="carousel-1"
                    className="carousel slide"
                    data-ride="false"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={Brochure1}
                          className="brochure fit-image"
                          alt="Backpacker Cars Brochure First Slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={Brochure2}
                          className="brochure fit-image"
                          alt="Backpacker Cars Brochure Second Slide"
                        />
                      </div>
                      <a
                        className="carousel-control-prev"
                        href="#carousel-1"
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#carousel-1"
                        role="button"
                        data-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="design content-underline"></div>

          <div className="container design section">
            <div className="row">
              <div className="col">
                <div className="row design picture justify-content-center">
                  <img
                    src={OnlineMarketing}
                    className="marketing fit-image"
                    alt="Online Marketing"
                  />
                </div>
              </div>
              <div className="col">
                <div className="col design content">
                  <h1 className="number font-weight-bold">08</h1>
                  <h3 className="project title font-weight-bold">
                    Kiteflyr Online Marketing Banners
                  </h3>
                  <p className="description">
                    The first company I worked for after University was
                    Kiteflyr. I was their Digital Marketing Coordinator. This
                    project is the PPC marketing and Facebook banners that I
                    created for them. The approach to these banners was to make
                    it clear and appealing to the customer who is looking for a
                    different way to fundraise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="design content-underline"></div>

          <div className="container design section">
            <div className="row">
              <div className="col">
                <div className="col design content">
                  <h1 className="number font-weight-bold">09</h1>
                  <h3 className="project title font-weight-bold">
                    Kiteflyr Website Designing
                  </h3>
                  <p className="description">
                    At Kiteflyr, I was also designing the web design layout.
                    This page was targeted towards the businesses market of
                    Kiteflyr. Therefore the appraoch to this design was simple
                    yet straight to the point, including all the need to know
                    information of how Kiteflyr works and how it can introduce
                    new customers to their business.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="row design video website justify-content-center">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      src="https://www.youtube.com/embed/bBcv4rnet7M?rel=0"
                      width="560"
                      height="315"
                      // frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="design content-underline"></div>

          <div className="container design section">
            <div className="row">
              <div className="col">
                <div className="row design video horticulture justify-content-center">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      src="https://www.youtube.com/embed/T4qardP8tLc?rel=0"
                      width="560"
                      height="315"
                      // frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="col design content">
                  <h1 className="number font-weight-bold">10</h1>
                  <h3 className="project title font-weight-bold">
                    Young Horticulture Of The Year Awards
                  </h3>
                  <p className="description">
                    Young Horticulture Of The Year was a University project
                    where the focus was to recieve and manage a clientele
                    project. I was the project manager for this project, where
                    the client wanted us to create a horticulture animation for
                    an awards dinner. The criteria was to use their logo,
                    sponsors logos, include the growing of a plant and introduce
                    a video. Project was completed on time with frequent project
                    updates, and the client was very happy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="design content-underline"></div>

          <div className="container design section">
            <div className="row">
              <div className="col">
                <div className="col design content">
                  <h1 className="number font-weight-bold">11</h1>
                  <h3 className="project title font-weight-bold">
                    Young Horticulture Of The Year <br /> (Short Animation)
                  </h3>
                  <p className="description">
                    The short animation was part of the same project listed
                    above, but the focus of this animation was to introduce each
                    award and therefore was a lot shorter. I created the plant
                    and oversaw the animation and all aspects of the project to
                    make sure that the client was happy with every step.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="row design video awards justify-content-center">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      src="https://www.youtube.com/embed/JrBsZ6dK9Cc?rel=0"
                      width="560"
                      height="315"
                      // frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="design content-underline"></div>

          <div className="container design section">
            <div className="row">
              <div className="col">
                <div className="row design video bird justify-content-center">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      src="https://www.youtube.com/embed/4VMCq4vOyCs?rel=0"
                      width="560"
                      height="315"
                      // frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="col design content">
                  <h1 className="number font-weight-bold">12</h1>
                  <h3 className="project title font-weight-bold">
                    Bird Rescue
                  </h3>
                  <p className="description">
                    Bird Rescue was a University project in the Video Production
                    className. We were given a theme of documentary that needed
                    to inform the public of a topic using the interface of
                    YouTube. We followed the story of a small bird rescue
                    company that included additional information on the types of
                    birds they have coming in and how the general public can
                    help.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="design content-underline"></div>

          <div className="container design section">
            <div className="row">
              <div className="col">
                <div className="col design content">
                  <h1 className="number font-weight-bold">13</h1>
                  <h3 className="project title font-weight-bold">
                    Sound Design
                  </h3>
                  <p className="description">
                    The Sound Design project was an assignment in the Audio
                    Production className at University. Here we were introduced
                    to the elements of audio within the film industry. We used
                    foley and replaced audio to add atmosphere to the scene in a
                    way that we thought was appropriate.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="row design video sound justify-content-center">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      src="https://www.youtube.com/embed/nvDKnM6jhYk?rel=0"
                      width="560"
                      height="315"
                      // frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="design content-underline"></div>

          <div className="container design section">
            <div className="row">
              <div className="col">
                <div className="row design video drifting justify-content-center">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      src="https://www.youtube.com/embed/06GA19jQs6w?rel=0"
                      width="560"
                      height="315"
                      // frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="col design content">
                  <h1 className="number font-weight-bold">14</h1>
                  <h3 className="project title font-weight-bold">
                    Drifting Bihoku Circuit
                  </h3>
                  <p className="description">
                    Whilst I was in Japan visiting a friend, he invited me to
                    come drifitng with him. I have always wanted to create a
                    drifting video, so I was really looking forward to this
                    project. Here I wanted to use music to really piece together
                    a video that showcases the angles and speed of the
                    cornering. I used slow motion to capture the feel of the
                    video and camera angles to create a car styled video. Filmed
                    on a GoPro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="design content-underline"></div>

          <div className="container design section">
            <div className="row">
              <div className="col">
                <div className="col design content">
                  <h1 className="number font-weight-bold">15</h1>
                  <h3 className="project title font-weight-bold">
                    Dive Into Amed Bali
                  </h3>
                  <p className="description">
                    After just purchasing a GoPro, I wanted to give an
                    underwater video a go. Here I used Adobe Premiere Pro to
                    colour correct the footage to make the coral colours and
                    fish stand out. I also used the music to give an underwater
                    time slowed down feeling, like you get when you are under
                    the water.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="row design video dive justify-content-center">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      src="https://www.youtube.com/embed/vgmrgnuKuxk?rel=0"
                      width="560"
                      height="315"
                      // frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="design content-underline"></div>

          <div className="container design section">
            <div className="row">
              <div className="col">
                <div className="row design video landscapes justify-content-center">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      src="https://www.youtube.com/embed/pIMGZm0TSv4?rel=0"
                      width="560"
                      height="315"
                      // frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="col design content">
                  <h1 className="number font-weight-bold">16</h1>
                  <h3 className="project title font-weight-bold">
                    WA and NT Landscapes
                  </h3>
                  <p className="description">
                    WA and NT Landscapes project was an experimantal use of the
                    footage I had built up in AUstralia using the GoPro. In the
                    project I tried to incorporate the use of movement to feel
                    that the camera is always moving in one direction, but the
                    landscape is changing. A video like this gives you a quick
                    feel of the landscapes that I encountered within such a
                    short space of time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="design content-underline"></div>

          <div className="container design section">
            <div className="row">
              <div className="col">
                <div className="col design content">
                  <h1 className="number font-weight-bold">17</h1>
                  <h3 className="project title font-weight-bold">
                    Sydney, Melbourne, Tasmania Roadtrip
                  </h3>
                  <p className="description">
                    The thing I love about this project is that it was more for
                    myself and friends to reflect on as I went for a home
                    footage approach, where it was quite relaxed and
                    free-flowing. For me this style of filming is perfect for
                    looking back at travel memories as it captures all the funny
                    moments, imperfections and perfections of the trip. I also
                    use the credits at the end to label each location in the
                    order we visited them.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="row design video roadtrip justify-content-center">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      src="https://www.youtube.com/embed/VrQwxp3KMuU?rel=0"
                      width="560"
                      height="315"
                      // frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="design content-underline"></div>

          <div className="container design section">
            <div className="row">
              <div className="col">
                <div className="row design video vehicles justify-content-center">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      src="https://www.youtube.com/embed/hKOBMHP4Yz8?rel=0"
                      width="560"
                      height="315"
                      // frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="col design content">
                  <h1 className="number font-weight-bold">18</h1>
                  <h3 className="project title font-weight-bold">
                    Mackerel Island Vehicles
                  </h3>
                  <p className="description">
                    Mackerel Island Vehicles was a project that I edited and
                    filmed to capture the silliness and shenanigans of the
                    island life. I feel that all the camera angles where used in
                    a way that makes the video quite trendy and relatable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
