import React from "react";
import { Helmet } from "react-helmet";
import "./Home.css";
import Video from "./homecomponents/Video_landing";
import Gallery from "./homecomponents/Gallery_landing";
import Reviews from "./homecomponents/CustomerReviews";
import Partners from "./homecomponents/Partners";
import HomeDesc from "./homecomponents/HomeDescription";
import CarouselSection from "./homecomponents/CarouselSection";
import Promovid from "./homecomponents/Promovid";


function Home() {
  return (
    <div className="container">
      <Helmet>
        <title>Deluxe Caravans, Australian Made Off Road, Family and Off Grid Caravans</title>
        <meta name="description" content="Family owned, Australian made caravans built in Campbellfield. Off road, family, and off grid ranges, structural warranty, nationwide repairers. Book a factory visit today." />
        <link rel="canonical" href="https://deluxecaravans.com.au/" />
      </Helmet>
      <div className="videocomponent">
        <Video />
      </div>
      <div className="videocomponent">
        <Promovid />
      </div>
      <div className="component component-fit">
        <Reviews />
      </div>
      <div className="component component-fit">
        <CarouselSection />
      </div>
      <div className="component">
        <HomeDesc />
      </div>
      <div className="component">
        <Gallery />
      </div>
      <div className="partnercomponent">
        <Partners />
      </div>
   
    </div>
  );
}

export default Home;
