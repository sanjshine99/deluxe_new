import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "./HomeComponent.css";

const HomeDescription = () => {
  const stagger = 0.5;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "0px 0px -200px 0px",
  });

  return (
    <div
      className="container"
      style={{
        opacity: inView ? 1 : 0,
        transition: "opacity 1.5s",
      }}
      ref={ref}
    >
      <div className="desccomponent">
        <h1 style={{ opacity: 1, transform: "translateY(0)" }}>
          YOUR DREAM CARAVAN. BUILT YOUR WAY.
        </h1>
        <h2 style={{ opacity: 1, transform: "translateY(0)" }}>
          Australian-Made Luxury Caravans, Built Around You
        </h2>
        <p
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transitionDelay: stagger * 1 + "s",
          }}
        >
          At Deluxe Caravans, we design and build Australian-made luxury caravans that combine quality craftsmanship, genuine off-road capability, and everyday practicality. Every caravan is custom built to order, so you can choose the layout, finishes and features that best suit the way you travel.
        </p>
        <p
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transitionDelay: stagger * 2 + "s",
          }}
        >
          Our range of Australian-made off-road caravans are designed to inspire, with every model built to handle Australia’s diverse landscapes while delivering the comfort, quality and craftsmanship you’d expect from a Deluxe caravan. Start with one of our proven layouts, then customize the floorplan, cabinetry, appliances, finishes and <Link to="/off-grid-caravans-australia">off-grid capability</Link>, including our advanced <Link to="/xptech">XP-TECH full composite construction options</Link>, to create a caravan tailored to your lifestyle.
        </p>
        <p
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transitionDelay: stagger * 3 + "s",
          }}
        >
          From premium <Link to="/couplesxptech">couples’ caravans</Link> to spacious <Link to="/family-caravans-australia">family caravans</Link>, every Deluxe Caravan is handcrafted in our Campbellfield manufacturing facility using quality materials and attention to detail. Whether you’re heading away for a weekend or travelling Australia full time, you’ll enjoy a caravan built around the way you travel, with no two builds ever being the same.
        </p>
        <p
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transitionDelay: stagger * 4 + "s",
          }}
        >
          You’ll also have the opportunity to follow your caravan throughout every stage of construction with our <Link to="/buildjourney">Build Journey</Link>, giving you complete transparency and confidence from the day your build begins through to handover.
        </p>
        <p
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transitionDelay: stagger * 5 + "s",
          }}
        >
          Experience the difference of Australian-made luxury caravans designed around your adventures, custom built for the way you travel and built to last for years of adventure.
        </p>
      </div>
    </div>
  );
};

export default React.memo(HomeDescription);
