import React from "react";
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
        <p
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transitionDelay: stagger * 1 + "s",
          }}
        >
          At Deluxe Caravans, we build Australian made caravans that combine luxury, durability, and
practicality. Our range of off road caravans Australia is designed to inspire, with every caravan
custom built to your order and to suit your lifestyle. Start with one of our proven layouts, then
personalize the floorplan, finishes, features, and off-grid capability to create the luxury caravan
you&#39;ve always dreamed of.</p>
        <p
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transitionDelay: stagger * 2 + "s",
          }}
        >
          From premium couples&#39; caravans to spacious family caravans Australia can rely on, every
Deluxe Caravan is handcrafted to your exact requirements—because no two travellers are the
same.</p>
        <p
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transitionDelay: stagger * 3 + "s",
          }}
        >
        You’ll also have the opportunity to follow your caravan as it&#39;s being built through our Build
Journey, giving you complete transparency and confidence from the day construction begins
through to handover.</p>
<p
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transitionDelay: stagger * 3 + "s",
          }}
        >
        Experience the difference of truly custom-built deluxe caravans, designed around your
adventures and built to last.</p>
      </div>
    </div>
  );
};

export default React.memo(HomeDescription);
