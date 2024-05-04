import Slide from "./Slide";
import slide1 from '../../assets/images/carousel1.jpg';
import slide2 from '../../assets/images/carousel2.jpg';
import slide3 from '../../assets/images/carousel3.jpg';

const HeroCarousel = () => {
  return (
    <section className="my-12">
      <swiper-container
        class="mySwiper"
        pagination="true"
        loop="true"
        pagination-clickable="true"
        navigation="true"
        centered-slides="true"
        autoplay-delay="4000"
        autoplay-disable-on-interaction="false"
      >
        <swiper-slide>
          <Slide img={slide1} title="Get your web development project done easily" />
        </swiper-slide>
        <swiper-slide>
          <Slide img={slide2} title="Start your digital marketing up n running" />
        </swiper-slide>
        <swiper-slide>
          <Slide img={slide3} title="Get your graphic design project quickly" />
        </swiper-slide>
      </swiper-container>
    </section>
  );
};

export default HeroCarousel;
