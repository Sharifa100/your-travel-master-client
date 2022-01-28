import React from 'react';
import { Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServicesAll = ({service}) => {
    // const{name,description,img,id} = props.servicesallcard;
    return (
     
            <div class="card-h">
      <img src={service.img}class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{service.name}</h5>
        <p class="card-text">{service.description.slice(0,100)}</p>
      </div>
      <div class="card-footer">
      <Link to={`/booking/${service?._id}`}><Button>Booking Now</Button></Link>
      </div>
  </div>
 
    );
};

export default ServicesAll;