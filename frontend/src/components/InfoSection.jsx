import "./InfoSection.css";
import Section from "./Animate";

const InfoSection = ({ heading, descr1, descr2,embedLink }) => {   
    return (
        <div className="abt-info" id="go-to-abt">
            <div className="abt-wrapper">
                <div className="abt-left">
            <div className="abt-header">
                <Section>{heading}</Section>
            </div>
            <div className="abt-content">
                <div className="abt-descr1"><Section>{descr1}</Section></div>
                <div className="abt-descr2"><Section>{descr2}</Section></div>  
            </div>
            </div>
            <div className="abt-right">
            <iframe
  className="embed-item"
 src={embedLink} 
 width="100%" height="100%"
 allowfullscreen
 webkitallowfullscreen
 frameborder="0"
 referrerpolicy="no-referrer-when-downgrade"
  title="player"
  allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  loading="lazy"
></iframe>
</div>
            </div>
        </div>
    )
};

export default InfoSection;