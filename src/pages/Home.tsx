import React from "react";
import "./Home.css";
import TestimonialSection from "../components/TestimonialSection";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <header className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT: Enhanced Text Content */}
            <div className="col-md-6 text-center text-md-start">
              <p className="hero-subtitle">Your Trusted Print Partner</p>
              <h1 className="hero-title">WePrint</h1>
              <p className="lead mb-4">
                Business cards. Flyers. Banners. Done fast, right, and
                affordably. Serving people since 1965
              </p>
              <div className="d-flex flex-column flex-md-row align-items-center gap-2">
                <input
                  type="email"
                  className="hero-input"
                  placeholder="Enter your email"
                />
                <button className="hero-btn">Start Printing</button>
              </div>
            </div>

            {/* RIGHT: Placeholder Images Grid */}
            <div className="col-md-6 mt-5 mt-md-0">
              <div className="image-grid">
                <img src="src\assets\leaflet.png" alt="Business Cards" />
                <img
                  src="src\assets\bussinessCardsMain small.png"
                  alt="Posters"
                />
                <img src="src\assets\flyers.jpeg" alt="Flyers" />
                <img src="src\assets\posters.jpeg" alt="Brochures" />
                <img src="src\assets\flex1.jpg" alt="Receipts" />
                <img src="src\assets\baneers.jpeg" alt="Banners" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="product-carousel">
        <div className="carousel-track">
          <div className="carousel-card">
            <img src="src\assets\cards1.jpeg" alt="Product 1" />
            <h4>Business Cards</h4>
          </div>
          <div className="carousel-card">
            <img src="src\assets\leaflet.png" alt="Product 2" />
            <h4>Flyers</h4>
          </div>
          <div className="carousel-card">
            <img src="src\assets\cards1.jpeg" alt="Product 3" />
            <h4>Brochures</h4>
          </div>
          <div className="carousel-card">
            <img src="src\assets\leaflet.png" alt="Product 4" />
            <h4>Banners</h4>
          </div>
          <div className="carousel-card">
            <img src="src\assets\cards1.jpeg" alt="Product 5" />
            <h4>Posters</h4>
          </div>

          <div className="carousel-card">
            <img src="src\assets\leaflet.png" alt="Product 1" />
            <h4>Business Cards</h4>
          </div>
          <div className="carousel-card">
            <img src="src\assets\cards1.jpeg" alt="Product 2" />
            <h4>Flyers</h4>
          </div>
          <div className="carousel-card">
            <img src="src\assets\leaflet.png" alt="Product 3" />
            <h4>Brochures</h4>
          </div>
          <div className="carousel-card">
            <img src="src\assets\cards1.jpeg" alt="Product 4" />
            <h4>Banners</h4>
          </div>
          <div className="carousel-card">
            <img src="src\assets\cards1.jpeg" alt="Product 5" />
            <h4>Posters</h4>
          </div>
        </div>
      </section>

      {/* TRUSTED BY SECTION */}
      <section className="trusted-section">
        <div className="container text-center">
          <p className="trusted-title">
            Trusted by your local bussiness including
          </p>
          <div className="logo-row">
            <span>colleges</span>
            <span>Schools</span>
            <span>manufacturing plants</span>
            <span>Retailers</span>
            <span>freelancers</span>
          </div>
        </div>
      </section>

      {/* PROBLEM/SOLUTION SECTION */}
      <section className="problem-section">
        <div className="container text-center">
          <h2 className="problem-title">Tired of waiting days for prints?</h2>
          <p className="problem-text">
            WePrint offers same-day turnaround for most products — with stunning
            quality and competitive pricing. We know how Inportant it is for
            your bussiness to present it self to your bussiness is it and we
            help relive some of that pressure from you
          </p>
          <button className="cta-btn-light">Save Time Now</button>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <div className="container text-center">
          <h2 className="section-heading">What We Offer</h2>
          <div className="row">
            <div className="col-md-4 feature-box">
              <h5>Fast Delivery</h5>
              <p>Most jobs completed within 24–48 hours.</p>
            </div>
            <div className="col-md-4 feature-box">
              <h5>Premium Quality</h5>
              <p>High-resolution prints that make your brand pop.</p>
            </div>
            <div className="col-md-4 feature-box">
              <h5>Competitive Prices</h5>
              <p>Affordable for startups and scalable for enterprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <TestimonialSection />

      {/* FINAL CTA SECTION */}
      <section className="final-cta-section">
        <div className="container text-center">
          <h2 className="cta-title">Ready to Print with Us?</h2>
          <p className="cta-subtitle">
            Start your first order today and see why we have been in businesses
            for 60+ years
          </p>
          <button className="cta-btn-main">Start Printing</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
