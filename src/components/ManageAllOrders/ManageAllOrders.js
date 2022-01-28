import './ManageAllOrders.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const ManageAllOrders = () => {
    
             const [services, setServices] = useState([]);
    const {id}= useParams();
    const {user} = useAuth();
    useEffect(()=>{
        fetch('http://localhost:5000/allorders')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete');
        if(proceed){
          fetch(`http://localhost:5000/delteOrder/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount >0) {
                    alert('deleted successfully')
                    const remainingOrders = services.filter(service => service._id !==id);
                    setServices(remainingOrders)
                 
                }
              });
            // console.log(id);
        }
        };

    
    return (
        <div>
             <h2>All Orders Are Here</h2>
           <h2>Total Orders are:{services.length}-orders</h2>
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

export default ManageAllOrders;