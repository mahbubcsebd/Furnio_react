import React from 'react';
import Footer from '../Footer';
import AboutUs from '../home/AboutUs';
import Arival from '../home/Arival';
import Counter from '../home/Counter';
import Discount from '../home/Discount';
import Hero from '../home/Hero';
import HomeBlog from '../home/HomeBlog';
import PopularItem from '../home/PopularItem';

const Home = () => {
  return (
    <div className='homePage' id='homePage'>
      <Hero/>
      <Counter/>
      <Arival/>
      <AboutUs/>
      <PopularItem/>
      <HomeBlog/>
      <Discount/>
      <Footer/>
    </div>
  )
}

export default Home