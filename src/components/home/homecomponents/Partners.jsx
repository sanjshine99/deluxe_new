import React from "react";
import "./HomeComponent.css";

const logos = [
  { src: "https://deluxcaravan.b-cdn.net/assets/partners/2022_bmpro-logo-hp.webp", alt: "BMPro" },
  { src: "https://deluxcaravan.b-cdn.net/assets/partners/Enerdrive-logo.webp", alt: "Enerdrive" },
  { src: "https://deluxcaravan.b-cdn.net/assets/partners/logo.webp", alt: "" },
  { src: "https://deluxcaravan.b-cdn.net/assets/partners/dometic.webp", alt: "" },
  { src: "https://deluxcaravan.b-cdn.net/assets/partners/cruisemaster.webp", alt: "" },
  { src: "https://deluxcaravan.b-cdn.net/assets/1001561189-removebg-preview.webp", alt: "" },
  { src: "https://deluxcaravan.b-cdn.net/assets/partners/camec-min.webp", alt: "" },
  { src: "https://deluxcaravan.b-cdn.net/assets/logo%20mat.png", alt: "Materialised", href: "https://materialised.com.au/" },
];

const Partners = () => {
  return (
    <>
      <h1 className="partners-heading">Our Premium Partners</h1>
      <div className="slider">
        <div className="slide-track">
          {[...logos, ...logos].map((logo, i) => (
            <div className="slide" key={i}>
              {logo.href ? (
                <a href={logo.href} target="_blank" rel="noopener noreferrer">
                  <img src={logo.src} alt={logo.alt} />
                </a>
              ) : (
                <img src={logo.src} alt={logo.alt} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default React.memo(Partners);
