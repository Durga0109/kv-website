import React from "react";
import "../assets/css/Gallery.css";

function Gallery() {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="images">
        <img src="/images/product1.jpg" alt="Product 1" />
        <img src="/images/product2.jpg" alt="Product 2" />
        <img src="/images/product3.jpg" alt="Product 3" />
      </div>
    </div>
  );
}

export default Gallery;
