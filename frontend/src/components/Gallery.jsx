import React from 'react';
import './Gallery.css'

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img src={image.url} alt={image.title} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
