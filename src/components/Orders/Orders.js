import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Orders.css';

const Orders = () => {
    const [services, setServices] = useState([]);
    const {id}= useParams();
    const {user} = useAuth();
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete');
        if(proceed){
          fetch(`http://localhost:5000/deleteOrder/${id}`, {
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
            console.log(id);
        }
        };

    
    return (
        <div className='container'>
           <h2>You have placed:{services.length}orders</h2>
           <div className="services">
        <div className="row container">
          {services?.map((service) => (
            <div className="col-md-4">
              <div className="service border border p-3">
                <div className="services-img ">
                  <img className="w-100" src={service?.img} alt="" />
                </div>

                <h6>{service?.serviceName}</h6>
                <h6>{service?._id}</h6>
                <h4>{service?.model}</h4>
                <p>{service?.comments}</p>
                <h3 className="text-danger"> Cost :{service?.price}$</h3>
                <h6>{service?.createdAt}</h6>
                <h6>{service?.status}</h6>
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

export default Orders;