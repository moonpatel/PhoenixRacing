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
import {Helmet} from 'react-helmet';

export default function Home() {
  const imgUrl = './studio.png';
  const heading = 'About Us';
  const heading2 = 'About Svnit';
  const description1='lorem ipsum  elit. Pellentesque in dapibus turpis. Pellentesque eget sollicitudin quam, sed dictum lorem. Sed finibus elit a lacus rhoncus, nec placerat erat scelerisque. Donec vestibulum risus eget mi rhoncus, a euismod mi porta. Phasellus id felis libero. Vivamus dignissim et massa a interdum. Donec auctor, nisl nec aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nisl nec nisl. Nulla f';
  const description2='lorem ipsum  elit. Pellentesque in dapibus turpis. Pellentesque eget sollicitudin quam, sed dictum lorem. Sed finibus elit a lacus rhoncus, nec placerat erat scelerisque. Donec vestibulum risus eget mi rhoncus, a euismod mi porta. Phasellus id felis libero. Vivamus dignissim et massa a interdum. Donec auctor, nisl nec aliquam ultricies, nunc nisl ultricies nunc, nec aliquam nisl nisl nec nisl. Nulla f';
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
      <InfoSection heading={heading} descr1={description1} descr2={description2} embedLink='./intro_vid_bl.mp4'/>
      <div className="stat-section">
                <Section><Stats /></Section>
      </div>
      <div className="home-carousel-container">
        <Carousel slides={slides} autoplay={true} interval={4000} />
      </div>
      <AbtSv heading={heading2} descr1={description1} descr2={description2} embedLink='./image3.jpg'/>
      <Testimonials/>
      <Faculty/>
      
    </div>
  );
}


