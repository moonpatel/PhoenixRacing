import React from 'react'
import "./Sponsors.css"
import Gallery from './Gallery'
import brochure from '/brochure.pdf';
import Connect from './connect';
import { Helmet } from 'react-helmet';

const Sponsors = () => {
    const currentSponsors = [
        { url: 'sponsors/2023-24/20230116_Bender_LOGO_Yellow.png', title: 'Image 1' },
        { url: 'sponsors/2023-24/agni-logo.png', title: 'Image 2' },
        { url: 'sponsors/2023-24/mathworks-logo-full-color-rgb.png', title: 'Image 3' },
        { url: 'sponsors/2023-24/NIT_Surat_Logo.svg.png', title: 'Image 4' },
        { url: "sponsors/2023-24/Prayosha Logo.png", title: "5" },
    ];
    const prevSponsors = [
        { url: "sponsors/past/apollo-tyres-logo.png", title: "" },
        { url: "frontend/public/sponsors/past/canera bank.png", title: "" },
        { url: "sponsors/past/ceat.png", title: "" },
        { url: "sponsors/past/GCST.jfif", title: "" },
        { url: "sponsors/past/godrej.jfif", title: "" },
        { url: "sponsors/past/Indian-Oil-Emblem.png", title: "" },
        { url: "sponsors/past/JK-Tyre-logo-PNG-Transparent.png", title: "" },
        { url: "sponsors/past/ktm.png", title: "" },
        { url: "sponsors/past/mahindra.png", title: "" },
        { url: "sponsors/past/OYO_Rooms_(logo).png", title: "" },
        { url: "sponsors/past/sopan.png", title: "" },
        { url: "sponsors/past/tata-motors-logo-3.png", title: "" },
        { url: "sponsors/past/toyota.png", title: "" },
    ]
    return (
        <div className='sponsor'>
            <Helmet>
                <title>Phoenix Racing | Sponsors</title>
                <meta name="description" content="Discover the sponsors and partners supporting Phoenix Racing, the Formula SAE racing team from NIT Surat. Learn about our collaborations and how we work together to achieve excellence in motorsport engineering." />
                <meta name="keywords" content="Phoenix Racing, NIT Surat, SVNIT, Formula SAE racing team, sponsors, partners, collaborations, motorsport engineering" />
            </Helmet>
            <div className='hero'>
                <div className="hero-image">
                    <h1>To Our Sponsors</h1>
                    <p>
                        Team Phoenix Racing extends its heartfelt appreciation to the sponsors who have generously supported us, enabling students to explore their capabilities through real-world competition and nurturing young Indian talent. With their invaluable assistance, Team Phoenix Racing is empowered to pursue innovative design and development, striving to become a globally respected team. Our sponsors play a crucial role in providing the means and resources necessary for our success, allow us to push boundaries and make a meaningful impact in the lives of our team members and future engineers. We express our deep gratitude to all our sponsors and donors for their unwavering dedication and contributions. It is an honor for us to represent your name, and we eagerly anticipate showcasing our abilities to the best of our capabilities.
                    </p>
                    <p>
                        Thank you everyone who supports our team.
                    </p>
                </div>
            </div>
            <div className='current'>
                <h1>Our Sponsors</h1>
                <Gallery images={currentSponsors} />
            </div>
            <div className='prev'>
                <h1>Previous Sponsors</h1>
                <Gallery images={prevSponsors} />
            </div>
            <div className="sponsor-btn">
                <Connect title="Interested in sponsoring us?" btnName="Contact Us" />
            </div>
            <div className="brochure-btn">
                <a href={brochure} target='__blank'>View Brochure</a>
            </div>
        </div>
    )
}

export default Sponsors;
