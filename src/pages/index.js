import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSection from '../components/InfoSection';
import { homeObjFive, homeObjFour, homeObjOne,homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState( false );

    const toggle = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
        <Sidebar isOpen={isOpen} 
        toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services />
        {/* <InfoSection {...homeObjThree}/> */}
        <InfoSection {...homeObjFour}/>
        <InfoSection {...homeObjFive}/>
        <Footer/>
    </>
  )
}

export default Home