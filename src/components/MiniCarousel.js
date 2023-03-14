import OwlCarousel from 'react-owl-carousel';

const options = {
  items: 1,
  nav: true,
  dots: false,
  autoplay: true,
  loop: true
};

const MiniCarousel = () => {
  return (
    <div>
      <OwlCarousel className="slide-one-item home-slider owl-theme" {...options}>
        <div>
          <img src="images/hero_bg_1.jpg" alt="Image" className="img-fluid" />
        </div>
        <div>
          <img src="images/hero_bg_2.jpg" alt="Image" className="img-fluid" />
        </div>
        <div>
          <img src="images/hero_bg_3.jpg" alt="Image" className="img-fluid" />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default MiniCarousel;

