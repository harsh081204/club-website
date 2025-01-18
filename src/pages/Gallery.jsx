import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import "../pages/Gallery.css";


const Gallery = () => {
  const kabaddiImages = [
    { original: '/Kabaddi/1.jpg', thumbnail: '/Kabaddi/1.jpg',},
    { original: '/Kabaddi/2.jpg', thumbnail: '/Kabaddi/2.jpg',},
    { original: '/Kabaddi/3.jpg', thumbnail: '/Kabaddi/3.jpg',},
    { original: '/Kabaddi/4.jpg', thumbnail: '/Kabaddi/4.jpg',},
    { original: '/Kabaddi/5.jpg', thumbnail: '/Kabaddi/5.jpg',},
    { original: '/Kabaddi/6.jpg', thumbnail: '/Kabaddi/6.jpg',},
    { original: '/Kabaddi/7.jpg', thumbnail: '/Kabaddi/7.jpg',},
    { original: '/Kabaddi/8.jpg', thumbnail: '/Kabaddi/8.jpg',},
    { original: '/Kabaddi/9.jpg', thumbnail: '/Kabaddi/9.jpg',},
    { original: '/Kabaddi/10.jpg', thumbnail: '/Kabaddi/10.jpg',},
    { original: '/Kabaddi/11.jpg', thumbnail: '/Kabaddi/11.jpg',},
    
  ];

  const volleyballImages = [
    { original: '/Chess.jpg', thumbnail: '/Chess.jpg'},
    { original: '/Badminton.webp', thumbnail: '/Badminton.webp' },
    { original: '/Football.jpg', thumbnail: '/Football.jpg' },
    { original: '/Kabaddi.jpg', thumbnail: '/Kabaddi.jpg' },
    { original: '/TableTennis.webp', thumbnail: '/TableTennis.webp' },
    { original: '/Volleyball.webp', thumbnail: '/Volleyball.webp' },
    { original: '/Frame.png', thumbnail: '/Frame.png' },
    { original: '/Gambling.webp', thumbnail: '/Gambling.webp' },
  ];

  const badmintonImages = [
    { original: '/Chess.jpg', thumbnail: '/Chess.jpg'},
    { original: '/Badminton.webp', thumbnail: '/Badminton.webp' },
    { original: '/Football.jpg', thumbnail: '/Football.jpg' },
    { original: '/Kabaddi.jpg', thumbnail: '/Kabaddi.jpg' },
    { original: '/TableTennis.webp', thumbnail: '/TableTennis.webp' },
    { original: '/Volleyball.webp', thumbnail: '/Volleyball.webp' },
    { original: '/Frame.png', thumbnail: '/Frame.png' },
    { original: '/Gambling.webp', thumbnail: '/Gambling.webp' },
  ];

  return (
    <div className="App">
      <h1>Our Gallery</h1>
      <div className="gallery">
        <div className="section">
          <h2>Kabaddi</h2>
          <ImageGallery items={kabaddiImages} />
        </div>
        <div className="section">
          <h2>Volleyball</h2>
          <ImageGallery items={volleyballImages} />
        </div>
        <div className="section">
          <h2>Badminton</h2>
          <ImageGallery items={badmintonImages} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
