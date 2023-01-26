// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import { images } from "../../constants";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "./Swipe.scss";
const SwiperImage = () => {
  return (
    <Swiper
      // install Swiper modules
      id="swipe"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img className="swipeImage" src={images.image1} alt="Glass Railing" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swipeImage"
          src={images.image2}
          alt="Frameless Shower"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swipeImage"
          src={images.image3}
          alt="Glass Stair Railing"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swipeImage"
          src={images.image4}
          alt="Retroactive storefront"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swipeImage"
          src={images.image5}
          alt="Store Front Windows"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swipeImage"
          src={images.image6}
          alt="Frameless Shower"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img className="swipeImage" src={images.image7} alt="Stair Railing" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swipeImage"
          src={images.image8}
          alt="Balcony Glass Railing"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swipeImage"
          src={images.image10}
          alt="Sliding glass door"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img className="swipeImage" src={images.image11} alt="Glass Railing" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swipeImage"
          src={images.image12}
          alt="Frameless Shower"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img className="swipeImage" src={images.image13} alt="Glass Railing" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swipeImage"
          src={images.image14}
          alt="retroactive windows"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swipeImage"
          src={images.image15}
          alt="Bay Area Glazer"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperImage;
