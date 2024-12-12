import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/css/Home.css";
import slider1 from '../assets/images/slider1.jpg';
import slider2 from '../assets/images/slider2.jpg';
import slider3 from '../assets/images/slider3.png';

function Home() {
  return (
    <div className="home-container">
      {/* Top Navbar Section */}
      <header className="top-navbar">
        <div className="left-section">
          <img src="logo.png" alt="Mythili Coirs Logo" className="company-logo" />
          <h1 className="company-name">Mythili Coirs</h1>
        </div>
        <div className="right-section">
          <a href="mailto:contact@mythilicoirs.com" className="contact-link">
            <img src="mail-icon.png" alt="Mail Icon" className="icon" />
            Contact Us
          </a>
          <a href="/contact" className="contact-link">
            <img src="contact-icon.png" alt="Contact Icon" className="icon" />
            Contact Page
          </a>
        </div>
      </header>

      {/* Slider Section */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="home-slider"
      >
        <SwiperSlide>
        <img src={slider1} alt="Slide 1" className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider2} alt="Slide 2" className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slider3} alt="Slide 3" className="slider-image" />
        </SwiperSlide>
      </Swiper>

      {/* Text Section */}
      <div className="home-text">
        <h1>Welcome to Mythili Coirs</h1>
        <p>
          We specialize in high-quality coconut coir products that are
          eco-friendly, sustainable, and versatile. Explore our range of
          products tailored for your needs.
        </p>
      </div>

      {/* Why Us Section */}
      <section className="why-us">
        <h2>Why Choose Us?</h2>
        <p>
          At Mythili Coirs, we pride ourselves on providing high-quality,
          sustainable products. Our commitment to the environment and our
          customers ensures that we meet all your coir needs.
        </p>
      </section>

      {/* Our Features Section */}
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="/images/feature1.jpg" alt="Feature 1" />
            <h3>Eco-Friendly</h3>
            <p>We focus on sustainable, eco-friendly practices in all our products.</p>
          </div>
          <div className="feature-card">
            <img src="/images/feature2.jpg" alt="Feature 2" />
            <h3>Durable & Versatile</h3>
            <p>Our coir products are designed to last and can be used in various applications.</p>
          </div>
          <div className="feature-card">
            <img src="/images/feature3.jpg" alt="Feature 3" />
            <h3>Affordable</h3>
            <p>High-quality products at an affordable price point.</p>
          </div>
        </div>
      </section>

      {/* Our Products Section with Slider */}
      <section className="our-products">
        <h2>Our Products</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="product-slider"
        >
          <SwiperSlide>
            <img src="/images/product1.jpg" alt="Product 1" className="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/product2.jpg" alt="Product 2" className="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/product3.jpg" alt="Product 3" className="slider-image" />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* End of Homepage Section */}
      <section className="end-homepage">
        <p>
          Thank you for visiting Mythili Coirs. We are committed to providing you
          with the best coconut coir products. Contact us for more information!
        </p>
      </section>
    </div>
  );
}

export default Home;
