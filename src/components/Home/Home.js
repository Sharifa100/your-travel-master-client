import React from 'react';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import TravelAward from '../TravelAward/TravelAward';


const Home = () => {
  
    return (

        <div className='container'>
        <div className='home'>
          <Slider></Slider>
          <Services></Services>
          <br></br>
          <br></br>
        <TravelAward></TravelAward>
        </div>
        </div>
    );
};

export default Home;