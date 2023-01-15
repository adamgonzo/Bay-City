import React from 'react';
import Header from './container/Header/Header';
import About from './container/About/About';
import Contact from './container/Contact/Contact';
import Footer from './container/Footer/Footer';
import SwiperImage from "./container/Swiper/Swiper"
import Data from './fillInData';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header Data={Data} />
      <About Data={Data} />
      < SwiperImage />
      <Contact Data={Data} />
      <Footer Data={Data} />
    </div>
  );
}

export default App;
