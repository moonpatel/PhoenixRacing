import "./InfoSection.css";
import Stats from "./Stats";
import Section from "./Animate";

const InfoSection = ({ heading, descr1, descr2 }) => {   
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
            < iframe 
            className='video-intro'
            src="https://www.youtube.com/embed/2PnbGCbcRYU" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            loading="lazy"/>
            </div>
            </div>
            <div className="stat-section">
                <Section><Stats /></Section>
            </div>
        </div>
    )
};

export default InfoSection;