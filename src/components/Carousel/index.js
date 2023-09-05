import './carousel.css';
import './script';

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
      
      <script src='./script.js'></script>

      <span className='titulo-portfolio'><br/>PORTFÓLIO<br/></span>

      <div id="carousel">
        <div id="content">

          <img src={image01} class="item" alt="item" />   
          <img src={image02} class="item" alt="item" />   
          <img src={image03} class="item" alt="item" />   
          <img src={image04} class="item" alt="item" />   
          <img src={image05} class="item" alt="item" />   
          <img src={image06} class="item" alt="item" />   
          <img src={image07} class="item" alt="item" />
          <img src={image08} class="item" alt="item" />
          <img src={image09} class="item" alt="item" />
        </div>
      </div>

      <button id="prev">
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

      <button id="next">
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
