import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Booking.css'
import useAuth from "../../Hook/useAuth";

const Booking = () => {
    const { id} = useParams();
  const [service, setService] = useState({});

  const {user} = useAuth();
//   const email = sessionStorage.getItem("email");
  useEffect(() => {
    fetch(`http://localhost:5000/singleservice/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  console.log(service);
  const {
    register,
    handleSubmit,
   formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const proceed= window.confirm('Are you sure you want to order?');
    if(proceed){
      //  console.log(data);
   
    data.status = "pending";

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {if(result){
        alert('booking added successfully')
 setService('');
      }});
    // console.log(data);
    }
     
  };
    return (
        <div>
            <h2>This is a booking page.</h2>
<p><small>{id}</small></p>
            <div className="booking-container">
        <div className="row container">
          <div className="col-md-6">
            <div className="details-img">
              <img className="w-75" src={service?.img} alt="" />
            </div>
            <h2>{service?.name}</h2>
            <p className="text-start">{service?.description}</p>
            <h1> price: {service?.price} $</h1>
            <h1 className="text-danger"> service-type: {service?.model}</h1>
          </div>
          <div className="col-md-6">
            <h1>booking Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
            
                {...register("serviceName",{required:true})}
              
                defaultValue={service?.name}
                className="p-2 m-2 w-100"
              />
              <br />
             <input
            {...register("user")}
                defaultValue={user?.displayName}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
               {...register("email",{required:true})}
                defaultValue={user?.email} 
               
                className="p-2 m-2 w-100"
              />
              {errors.email && <span className="error">This field is required</span>}
              
              
             
              <br />
              <input
                {...register("date")}
                // placeholder="Name"
                type="date"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("comments")}
                placeholder="comments"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register("price", { required: true })}
                defaultValue={service?.price}
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("img", { required: true })}
                defaultValue={service?.img}
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              <select {...register("model")} className="p-2 m-2 w-100">
                <option value={service?.model}>{service?.model}</option>
                <option value="premium">premium</option>
                <option value="classic">classic</option>
                <option value="business">business</option>
              </select>
              <br />

             

              <input
                type="submit"
                value="Order Now"
                className="btn btn-info w-50"
              />
            </form>
          </div>
        </div>
      </div>
            <Link to ="/home"><Button>Back Home</Button></Link>
        </div>
    );
};

export default Booking;