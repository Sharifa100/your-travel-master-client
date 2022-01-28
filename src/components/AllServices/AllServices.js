import React,{ useEffect, useState } from 'react';
import ServicesAll from './../ServicesAll/ServicesAll';
import './AllServices.css';

const AllServices = () => {
    const[allServices, setAllservices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allservices')
        .then(res =>res.json())
        .then(data=>setAllservices(data))
    },[])
    return (

        <div>
           <h2>Our all services</h2>
       <div>

          <div className="allservices-container">
{
    allServices.map(service=><ServicesAll
    key={service._id}
    service={service}
    >
    ,
    </ServicesAll>)
}
</div>
        </div>
          </div>
    );
};

export default AllServices;