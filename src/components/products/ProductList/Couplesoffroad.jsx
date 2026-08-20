import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Productlist.css";
import "../../home/Home.css";
import "../../home/homecomponents/HomeComponent.css";

const products = [
  {
    id: 1,
    name: "ECLIPSE 18'6\"",
    price: "$89,000",
    image: "https://deluxcaravan.b-cdn.net/assets/header/216.webp",
    link: "/eclipse18couplesoffroad",
  },
  {
    id: 2,
    name: "ECLIPSE 21'6\"",
    price: "$96,900",
    image: "https://deluxcaravan.b-cdn.net/assets/header/216.webp",
    link: "/eclipse21couplesoffroad",
  },
  {
    id: 3,
    name: "ECLIPSE 22'",
    price: "$98,900",
    image: "https://deluxcaravan.b-cdn.net/assets/header/216.webp",
    link: "/eclipse22couplesoffroad",
  },
];

const Couplesoffroad = React.memo(() => {
  return (
    <div className="productgrid-container">
      <Helmet>
        <title>Off Road Caravans for Couples, Deluxe Caravans Australia</title>
        <meta name="description" content="Compact, off road ready caravans built for couples who want to get further off the beaten track. Composite frame, airbag suspension, Australian made." />
        <link rel="canonical" href="https://deluxecaravans.com.au/couplesoffroad" />
      </Helmet>
      <div className="productgrid-component">
        <h1 className="product-grid-heading">COUPLES EXPEDITION</h1>
        <p className="intro-text">Explore our range of off road caravans for couples, featuring custom layouts and
premium couples caravan Australia designs, including the perfect off road caravan for
two.</p>
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
export default Couplesoffroad;
