import './carousel.css';

import image01 from '../../assets/images/image 1.jpg';
import image02 from '../../assets/images/image 2.jpg';
import image03 from '../../assets/images/image 3.jpg';
import image04 from '../../assets/images/image 4.jpg';
import image05 from '../../assets/images/image 5.jpg';
import image06 from '../../assets/images/image 6.jpg';
import image07 from '../../assets/images/image 7.jpg';
import image08 from '../../assets/images/image 8.jpg';
import image09 from '../../assets/images/image 9.jpg';

function Carousel () {
  return (
    
    <div id="carousel-wrapper">
      
      <span className='titulo-portfolio'><br/>PORTFÓLIO<br/></span>

      <div id="carousel">
        <div id="content">

          <img src={image01} className="item" alt="item" />   
          <img src={image02} className="item" alt="item" />   
          <img src={image03} className="item" alt="item" />   
          <img src={image04} className="item" alt="item" />   
          <img src={image05} className="item" alt="item" />   
          <img src={image06} className="item" alt="item" />   
          <img src={image07} className="item" alt="item" />
          <img src={image08} className="item" alt="item" />
          <img src={image09} className="item" alt="item" />
        </div>
      </div>

      <button id="prev" onClick={
      
        function CarouselPort() {
          const gap = 16;
        
          const carousel = document.getElementById("carousel"),
            content = document.getElementById("content"),
            next = document.getElementById("next"),
            prev = document.getElementById("prev");
        
          next.addEventListener("click", e => {
            carousel.scrollBy(width + gap, 0);
            if (carousel.scrollWidth !== 0) {
              prev.style.display = "flex";
            }
            if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
              next.style.display = "none";
            }
          });
        
          prev.addEventListener("click", e => {
            carousel.scrollBy(-(width + gap), 0);
            if (carousel.scrollLeft - width - gap <= 0) {
              prev.style.display = "none";
            }
            if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
              next.style.display = "flex";
            }
          });
        
          let width = carousel.offsetWidth;
          window.addEventListener("resize", e => (width = carousel.offsetWidth));
        
        }
      
      
      }>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
        </svg>
      </button>

      <button id="next" onClick={
        function CarouselPort() {
          const gap = 16;

          const carousel = document.getElementById("carousel"),
            content = document.getElementById("content"),
            next = document.getElementById("next"),
            prev = document.getElementById("prev");

          next.addEventListener("click", e => {
            carousel.scrollBy(width + gap, 0);
            if (carousel.scrollWidth !== 0) {
              prev.style.display = "flex";
            }
            if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
              next.style.display = "none";
            }
          });

          prev.addEventListener("click", e => {
            carousel.scrollBy(-(width + gap), 0);
            if (carousel.scrollLeft - width - gap <= 0) {
              prev.style.display = "none";
            }
            if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
              next.style.display = "flex";
            }
          });

          let width = carousel.offsetWidth;
          window.addEventListener("resize", e => (width = carousel.offsetWidth));

        }


      }>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
        </svg>
      </button>
        
    </div>
      
  );
}

export default Carousel;
