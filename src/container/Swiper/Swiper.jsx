// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { images } from '../../constants';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './Swipe.scss';
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
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className="swipeImage" src={images.image1} alt="window"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.image2} alt="window"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.image3} alt="window"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.image4} alt="window"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.image5} alt="window"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.image6} alt="window"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.image7} alt="window"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.image8} alt="window"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.image10} alt="window"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.image11} alt="window"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.image12} alt="window"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.image13} alt="window"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.image14} alt="window"/></SwiperSlide>
      <SwiperSlide><img className="swipeImage" src={images.image15} alt="window"/></SwiperSlide>


    </Swiper>
  );
};

export default SwiperImage;