import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './testimonials.css';
class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        className="testimonial-carousel"
      >
        <div>
          <img src="./image1.jpg" alt="1" className="test-img"></img>
          <div className="test-Carousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>
        <div>
          <img src="./image2.jpg" alt="2" className="test-img"></img>
          <div className="test-Carousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
            Phoenix Racing is one of the oldest technical clubs of SVNIT- dedicated to technical activities associated with Automobile Engineering. The environment and bonding they create during their technical engagements encourage students to develop a blend of passion for innovation in allied areas of automobile engineering. The interaction also augments the all-round personality along with managerial skills of the team members. The club has proven its potential through years of hard work, and team members have come up with many innovations. I am hopeful that their future achievements will be even greater. Their recent venture towards electric vehicles will definitely help the mobility of the country in the future. Best wishes to the team for its future endeavors.

            </p>
          </div>
        </div>
        <div>
          <img src="./image3.jpg" alt="3" className="test-img"></img>
          <div className="test-Carousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}
export default Testimonials;
