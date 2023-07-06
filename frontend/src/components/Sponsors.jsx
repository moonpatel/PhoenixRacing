import React from 'react'
import "./Sponsors.css"
import Gallery from './Gallery'
// import SlideLeft from './SlideLeft';
// import SlideRight from './SlideRight';
import Slider from './Slider';
import Connect from './connect';
import { Helmet } from 'react-helmet';

const  Sponsors = () => {
    return (
        <div className='sponsor'>
            <Helmet>
                <title>Phoenix Racing | Sponsors</title>
                <meta name="description" content="Discover the sponsors and partners supporting Phoenix Racing, the Formula SAE racing team from NIT Surat. Learn about our collaborations and how we work together to achieve excellence in motorsport engineering." />
                <meta name="keywords" content="Phoenix Racing, NIT Surat, SVNIT, Formula SAE racing team, sponsors, partners, collaborations, motorsport engineering" />
            </Helmet>
            <div className='hero'>
                <div className="hero-image">
                <h1>Why Sponsor Us?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a enim massa. Aliquam eget mi euismod, viverra mi eu, luctus lacus. Morbi enim elit, efficitur vitae diam suscipit, elementum commodo lacus. Mauris quis lectus arcu. Mauris condimentum, sapien non eleifend scelerisque, nulla nunc pretium nibh, at porta turpis nibh a ligula. Vivamus sagittis lorem vitae ante dignissim, eget pellentesque nunc convallis. Maecenas lobortis mollis lorem, eget viverra velit maximus et. </p>
                </div>
            </div>
            <div className='current'>
                <h1>Our Sponsors</h1>
                <Gallery />
            </div>
            <div className='prev'>
                <h1>Previous Sponsors</h1>
                <Slider/>
                <Slider/>
            </div>
            <div className="sponsor-btn">
                <Connect title="Interested in sponsoring us?" btnName="Contact Us"/>
            </div>
            <div className="brochure-btn">
                <a href="">View Brochure</a>
            </div>
        </div>
    )
}

export default Sponsors;
