import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog-page">
      <Helmet>
        <title>Caravan Tips, Guides and Reviews, Deluxe Caravans Blog</title>
        <meta name="description" content="Genuine advice on off road travel, off grid setups, and choosing the right caravan for your family, from the team building them in Campbellfield." />
        <link rel="canonical" href="https://deluxecaravans.com.au/blog" />
      </Helmet>
      <div className="blog-hero">
        <h1 className="blog-heading">BLOGS</h1>
        <p className="blog-subheading">CARAVAN TIPS AUSTRALIA | OFF ROAD CARAVAN GUIDES | FAMILY CARAVAN
ADVICE</p>
      </div>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.id} className="blog-card">
            <div className="blog-card-body">
              <div className="blog-card-category">{post.category}</div>
              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-card-footer">
                <span className="blog-card-date">{post.date}</span>
                <span className="blog-card-cta">READ MORE →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Blog);
