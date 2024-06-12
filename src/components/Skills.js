import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp2.png"
import DynamicMeter from "./Meter";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>As an Applied Computer Science student,<br></br>I've developed a variety of technical and soft skills that make me a valuable addition to any team.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <DynamicMeter percentage={95} />
                                <h5>Perseverance</h5>
                            </div>
                            <div className="item">
                                <DynamicMeter percentage={90} />
                                <h5>Communication</h5>
                            </div>
                            <div className="item">
                                <DynamicMeter percentage={90} />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <DynamicMeter percentage={85} />  
                                <h5>Problem solving</h5>
                            </div>
                            <div className="item">
                                <DynamicMeter percentage={90} />
                                <h5>Flexibility</h5>
                            </div>
                            <div className="item">
                                <DynamicMeter percentage={75} />
                                <h5>Leader</h5>
                            </div>
                            <div className="item">
                                <DynamicMeter percentage={80} />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <DynamicMeter percentage={65} />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <DynamicMeter percentage={85} />
                                <h5>Html, Css</h5>
                            </div>
                            <div className="item">
                                <DynamicMeter percentage={70} />
                                <h5>C#</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-right" src={colorSharp} alt="Background" />
    </section>
  )
}
