import React, { useEffect, useState } from 'react';
import { Form, Table } from "react-bootstrap";
// import Select from "react-select";

const OrderStatus = () => {
    const [orders, setOrders] = useState([]);

    const [status, setStatus] = useState("");
  
    const handleStatus = (e) => {
      e.preventDefault();
      setStatus(e.target.value);
    };
    console.log(status);
    useEffect(() => {
      fetch("http://localhost:5000/allOrders")
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, []);
  
      // const status = "apporved";
    const handleUpdate = (id) => {
      fetch(`http://localhost:5000/updateStatus/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status }),
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.modifiedCount > 0){alert("updated successfully... ;)")
      setStatus({});};
      })
  
      console.log(id);
    };

    const handleDelete = (id) => {
      const proceed = window.confirm('Are you sure you want to delete');
      if(proceed){
        fetch(`http://localhost:5000/deleteOrders/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount >0) {
                  alert('deleted successfully')
                  const remainingOrders = orders.filter(orders => orders._id !==id);
                  setOrders(remainingOrders)
               
              }
            });
          // console.log(id);
      }
      };

    // const options =["Approved"]
    return (
        <div>
      <h1>All orders {orders.length}</h1>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Service Title</th>
      <th>Event description</th>
      <th>Image Link</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  {orders?.map((pd, index) => (
    <tbody>
      <tr>
        <td>{index}</td>
        <td>{pd.name}</td>
        <td>{pd.comments}</td>
        <td>{pd.img}</td>
      
    <td> <select onChange={handleStatus} className="p-2 m-2 w-100">
                <option  defaultValue={pd.status}>{pd.status}</option>
                <option value="approved">Approved</option>
                </select></td>
        <button  onClick={() => handleDelete(pd._id)} className="btn bg-danger p-2">Delete</button>
        <button
          onClick={() => handleUpdate(pd._id)}
          className="btn bg-success p-2"
        >
          Update
        </button>
      </tr>
    </tbody>
  ))}
</Table>
</div>
);      
      
};

export default OrderStatus;