import React,{useEffect} from "react";
import "../style/homepageResume.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  {ParkAvenju}  from "./mySites/parkAvenju";
import { FootbalMillioner } from "./mySites/footbalMillioner";
import { BZSP } from "./mySites/bzsp";
import { LaVilla } from "./mySites/laVilla";

const HomepageAbout = () => {
    useEffect(()=>{
      AOS.init();
    },[])

    return (
        <div className="homepage_about" id="homepage_about">
            <h1 className=" flux">MY PROJECTS </h1>
            <h4 className="typing-demo">I'm at the beginning of my journey, it's so dreary here for this reason</h4>
            <Carousel 
                showArrows={true} autoPlay swipeable={true} 
                emulateTouch={true} infiniteLoop width={'95vw'} stopOnHover={true} showThumbs={false}
                transitionTime={'1200' } interval={'15000'} 
            >  
                <BZSP/>
                <LaVilla/>
                <ParkAvenju/>                               
                <FootbalMillioner/>
            </Carousel>
        </div>
    ) 
}
export default HomepageAbout