import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const ManageAllServices = () => {
    
    const [services, setServices] = useState([]);
    const {id}= useParams();
    const {user} = useAuth();
    useEffect(()=>{
        fetch('http://localhost:5000/allservices')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete');
        if(proceed){
          fetch(`http://localhost:5000/deleteservices/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount >0) {
                    alert('deleted successfully')
                    const remainingServices = services.filter(service => service._id !==id);
                    setServices(remainingServices)
                 
                }
              });
            // console.log(id);
        }
    };
    
    return (
        <div>
            <h2>Here you can manage all services</h2>
            <h2>Total Services are:{services.length}</h2>
           <div className="services">
        <div className="row container">
          {services?.map((service) => (
            <div className="col-md-4">
              <div className="service border border p-3">
                <div className="services-img ">
                  <img className="w-100" src={service?.img} alt="" />
                </div>

                <h6>{service?.name}</h6>
                <h6>{service?._id}</h6>
                <h4>{service?.model}</h4>
                <p>{service?.comments}</p>
                <h3 className="text-danger"> Cost :{service?.price}$</h3>
                <h6>{service?.createdAt}</h6>
                <button
                  onClick={() => handleDelete(service?._id)}
                  className="btn btn-danger"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
         
    

        
    );
       
    
};
    
export default ManageAllServices;