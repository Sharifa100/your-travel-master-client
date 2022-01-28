import React from 'react';
import imgabout from '../../assets/images/about us.jpg';
import "./About.css";

const About = () => {
    return (
        <div>
            <h2 className='mb-5'>About Us </h2>
            <div>
              <div className='container'>
        <div className="row  mt-5">
          <div className="col-md-6">
            <div className="details-img">
              <img className="about-img" src={imgabout} alt="" />
            </div>
           
          </div>
          <div className="col-md-6">
          A travel agency is a private retailer or public service that provides travel and tourism-related services to the general public on behalf of accommodation or travel suppliers to offer different kinds of travelling packages for each destination. Travel agencies can provide outdoor recreation activities, airlines, car rentals, cruise lines, hotels, railways, travel insurance, package tours, insurance, guide books, VIP airport lounge access, arranging logistics for luggage and medical items delivery for travellers upon request, public transport timetables, car rentals, and bureau de change services. Travel agencies can also serve as general sales agents for airlines that do not have offices in a specific region. A travel agency's main function is to act as an agent, selling travel products and services on behalf of a supplier. They do not keep inventory in-hand unless they have pre-booked hotel rooms or cabins on a cruise ship for a group travel event such as a wedding, honeymoon, or other group event.
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default About;