import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res =>res.json())
        .then(data=>setServices(data.slice(0,6)))
    },[])

    return (
        <div>
            <h2 className="text-warning mt-5">our services</h2>
            
            <div>
           
 
 {services.length === 0 ?
 <Spinner animation="border" />
 :
    //  <Row xs={1} md={3} className="g-4">
    <div id="services"class="services-container">
    {
         services.map(service=><Service
         key={service._id}
         service={service}
         >

         </Service>)
     }
      </div>
     }
    
     </div>
//  </div>


        
    );
};

export default Services;