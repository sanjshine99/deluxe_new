import React from "react";
import { Helmet } from "react-helmet";
import "./Productlist.css";
import "../../home/Home.css";
import "../../home/homecomponents/HomeComponent.css";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "ECLIPSE E18",
    price: "$129,900",
    image: "https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp",
    link: "/eclipse18couplesxptech",
  },
  {
    id: 2,
    name: "ECLIPSE E216",
    price: "$136,900",
    image: "https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp",
    link: "/eclipse21couplesxptech",
  },
  {
    id: 3,
    name: "ECLIPSE E22",
    price: "$138,900",
    image: "https://deluxcaravan.b-cdn.net/assets/Carousel/XP-TECH-SB186-Newer.webp",
    link: "/eclipse22couplesxptech",
  },
];

const Couplesxptech = React.memo(() => {
  return (
    <div className="productgrid-container">
      <Helmet>
        <title>Luxury Off Grid Caravans for Couples, XP Tech Range, Deluxe Caravans</title>
        <meta name="description" content="Off grid power, real comfort, and a layout built for two. See why couples across Australia are choosing the XP-TECH range for the Big Lap." />
        <link rel="canonical" href="https://deluxecaravans.com.au/couplesxptech" />
      </Helmet>
      <div className="productgrid-component">
        <h1 className="product-grid-heading">Couples XP-TECH</h1>
        <p className="intro-text">Explore our range of luxury caravans for couples, featuring XP-TECH construction and premium off grid caravan for couples designs, built to redefine the couples caravanning Australia experience.</p>
        <h2 className="product-grid-subheading">Eclipse</h2>
        <p className="price-label">Starting Prices</p>
        <p className="price-disclaimer">All prices shown are starting prices. Final price depends on your selected customisations and optional upgrades.</p>
        <div className="product-grid">
          {products.map((product) => (
            <Link to={product.link} key={product.id}>
              <div className="product-card">
                <img src={product.image} alt={product.name} />
                <p>
                  {product.name} | {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
});
export default Couplesxptech;
