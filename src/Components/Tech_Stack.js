import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import java from "../Components/assets/img/icons8-java.svg";
import javascript from "../Components/assets/img/icons8-javascript-logo.svg";
import  bootstrap from "../Components/assets/img/icons8-bootstrap.svg"
import html  from "../Components/assets/img/icons8-html-5.svg";
import css  from "../Components/assets/img/icons8-css3.svg";
import blob from "../Components/assets/img/blob.svg";



export const Tech_Stack = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="tech_stack" id="tech_stack">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tech_stack-bx wow zoomIn">
              <h3>Tech Stack</h3>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skiltech_stack-slider"
              >
                <div className="item">
                <div className="item_inside">
                  <img src={blob} ></img>
                  </div>
                  <div className="inner_item">
                    <img src={java} alt="stack-logo-img"  />
                  </div>
                </div>

                <div className="item">
                <div className="item_inside">
                  <img src={blob} ></img>
                  </div>
                  <div className="inner_item">
                    <img src={javascript} alt="stack-logo-img"  />
                  </div>
                </div>

                <div className="item">
                <div className="item_inside">
                  <img src={blob} ></img>
                  </div>
                  <div className="inner_item">
                    <img src={html} alt="stack-logo-img"  />
                  </div>
                </div>

                <div className="item">
                <div className="item_inside">
                  <img src={blob} ></img>
                  </div>
                  <div className="inner_item">
                    <img src={bootstrap} alt="stack-logo-img"  />
                  </div>
                </div>

                <div className="item">
                <div className="item_inside">
                  <img src={blob} ></img>
                  </div>
                  <div className="inner_item">
                    <img src={css} alt="stack-logo-img"  />
                  </div>
                </div>

             


              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
