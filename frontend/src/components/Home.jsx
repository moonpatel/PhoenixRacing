import './Home.css';
import Hero from './Hero';
import { Carousel } from "./carousel/carousel";
import InfoSection from './InfoSection';
import Stats from "./Stats";
import Section from "./Animate";
import MakeParallax from './parallax';
import AbtSv from './AbtSv';
import Faculty from './Faculty';
import Testimonials from './testimonials';
import { Helmet } from 'react-helmet';

export default function Home() {
  const imgUrl = './studio.png';
  const heading = 'About Us';
  const heading2 = 'About Svnit';
  const description1 = 'Team Phoenix Racing is a technical student chapter affiliated with SVNIT, consisting of over 60 students from various engineering disciplines. Our primary objective is to provide a platform for aspiring engineers to excel, acquire practical knowledge, and gain exposure to real-world challenges. Since our establishment in 2005, we have actively participated in and successfully competed in a range of competitions, including Baja, Supra SAE, Go-Kart, and Formula Bharat. These endeavors have involved the complete design, manufacturing, and management of projects, all carried out by our dedicated student team. Embracing the principles of sustainability and electrification, we have made a significant transition towards the production of electric vehicles starting in 2022.';
  const description2 = '';
  const aboutSvnit = 'Established in 1961 as one of the RECs,Sardar Vallabhbhai National Institute of Technology aimed to provide technical education in Civil, Mechanical, and Electrical Engineering. Over time, additional undergraduate programs were introduced, including Electronics Engineering in 1983-84, Computer Engineering and Production Engineering in 1988-89, and Chemical Engineering in 1995-96. In 2002, the institute received recognition as a "Deemed University" with the new name Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat, through the University Grants Commission (UGC) Act. Subsequently, in 2007, it obtained the prestigious status of an "Institute of National Importance." Currently, SVNIT offers six undergraduate programs, nineteen postgraduate programs, three M.Sc. programs, and a five-year integrated program that includes a doctoral program in all the aforementioned disciplines.';
  let slides = [
    <img
      src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Ghostrunner_image1600w.jpg"
      alt="1"
    />,
    <img
      src="https://i.pinimg.com/originals/cd/74/50/cd7450cf06d003bba1af588f0ac6722a.jpg"
      alt="2"
    />,
    <img
      src="https://cdn2.unrealengine.com/egs-deadcells-motiontwin-s1-2560x1440-312502186.jpg"
      alt="3"
    />,
    <img
      src="https://cdn2.unrealengine.com/egs-deadcells-motiontwin-s1-2560x1440-312502186.jpg"
      alt="4"
    />
  ];

  return (
    <div className="home">
      <Helmet>
        <title>Phoenix Racing | Formula SAE Racing Team from NIT Surat</title>
        <meta name="description" content="Phoenix Racing is the Formula SAE racing team from NIT Surat. We design, build, and compete with high-performance race cars in competitions. Discover our journey, achievements, and innovation." />
        <meta name="keywords" content="Formula SAE racing team, Phoenix Racing, NIT Surat,SVNIT, Motorsport engineering, Race car design, Automotive innovation, Engineering competition" />
      </Helmet>
      <Hero />
      <MakeParallax imageUrl={imgUrl} />
      <InfoSection heading={heading} descr1={description1} descr2={description2} embedLink='./intro_vid_bl.mp4' />
      <div className="stat-section">
        <Section><Stats /></Section>
      </div>
      <div className="home-carousel-container">
        <Carousel slides={slides} autoplay={true} interval={4000} />
      </div>
      <AbtSv heading={heading2} descr1={aboutSvnit} descr2="" embedLink='./image3.jpg' />
      <Testimonials />
      <Faculty />

    </div>
  );
}


