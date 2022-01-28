import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddServices from "../AddServices/AddServices";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageAllServices from '../ManageAllServices/ManageAllServices';
import OrderStatus from '../OrderStatus/OrderStatus';
import Orders from '../Orders/Orders';
import './DashBoard.css';
const DashBoard = () => {
  const [control,setControl] = useState("addservices")
  console.log(control);
    return (
        <div>
         <div id="wrapper">

<aside id="sidebar-wrapper">
  <div className="sidebar-brand">
    <h2>Logo</h2>
  </div>
  <ul className="sidebar-nav">
    
   
    <li 
    onClick={()=>setControl("addservices")}>
 <Link to="#"><i className=" icon fas fa-plane-departure"></i>Add Services</Link>
    </li>
    <li 
    onClick={()=>setControl("allorders")}>
 <Link to="#"><i className=" icon fab fa-servicestack"></i>Manage Order</Link>
    </li>
    <li onClick={()=>setControl("manageallservices")}>
      <Link to="#"><i className="icon fa fa-plug"></i>Manage Services</Link>
    </li>
    <li onClick={()=>setControl("orders")}>
      <Link to="#"><i className="icon fa fa-plug"></i>My Orders</Link>
    </li>
    <li
    onClick={()=>setControl("orderstatus")}>
      <Link to="#"><i className=" icon fa fa-user"></i>Order Status</Link>
    </li>
  </ul>
</aside>

<div id="navbar-wrapper">
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
      <Link to="#" class="navbar-brand" id="sidebar-toggle"><i ></i></Link>
      </div>
    </div>
  </nav>
</div>

<section id="content-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="content-title">Render Your Components</h2>
        {control === "addservices" && <AddServices></AddServices>}
        {control === "allorders" && <ManageAllOrders></ManageAllOrders>}
        {control === "manageallservices" && <ManageAllServices></ManageAllServices>}
        {control === "orders" && <Orders></Orders>}
        {control === "orderstatus" && <OrderStatus></OrderStatus>}
      </div>
    </div>
</section>

</div> 
        </div>
    );
};

export default DashBoard;