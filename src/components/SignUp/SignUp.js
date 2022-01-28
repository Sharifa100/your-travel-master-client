import React, { useState } from "react";
import {  Alert, Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import useAuth from "../../Hook/useAuth";



const SignUp = () => {
  const [loginData, setloginData] = useState({})
  const history = useHistory();
const { user,registerUser,isLoading,authError} = useAuth();

  const handleOnBlur = e => {
const field = e.target.name;
const value = e.target.value;
const newLoginData = {...loginData};
newLoginData[field] = value;
console.log(field,value, newLoginData);
setloginData(newLoginData);
// console.log(field, value);
  }
  const  handleLoginSubmit = e => {
// alert('hello')
if(loginData.password !== loginData.password2){
  alert('Your Password did not match');
  return
}
registerUser(loginData.email, loginData.password,loginData.name,history);
    e.preventDefault();
  }
    return (
        <Container
        style={{
          height:"calc(100vh-56px)",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}>
         <div style={{maxWidth:"500px", width:"100%"}}>
         <h2> Register Now</h2>
          {! isLoading && <Form onSubmit={handleLoginSubmit}>
       <Form.Group onBlur={handleOnBlur} className="mb-3" controlId="formBasicEmail">
         <Form.Label></Form.Label>
         <Form.Control name="name" type="text" placeholder="Your Name" />
        
       </Form.Group>
       <Form.Group onBlur={handleOnBlur} className="mb-3" controlId="formBasicEmail">
         <Form.Label></Form.Label>
         <Form.Control name="email" type="email" placeholder="Enter email" />
        
       </Form.Group>
     
       <Form.Group onBlur={handleOnBlur} className="mb-3" controlId="formBasicPassword">
         <Form.Label></Form.Label>
         <Form.Control name="password" type="password" placeholder="Password" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicCheckbox">
         
       </Form.Group>
       <Form.Group onBlur={handleOnBlur} className="mb-3" controlId="formBasicPassword">
         <Form.Label></Form.Label>
         <Form.Control type="password" name="password2" placeholder="Retype Your Password" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
       </Form.Group>
       <Button style={{maxWidth:"500px", width:"100%"}}  variant="primary" type="submit">
         Submit
       </Button>
     </Form>}
     {isLoading && <Spinner animation="border" role="status"/>}
     {user?.email && <Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    user created successfully !
  </p>
  
</Alert>}
{authError &&  <Alert  variant="danger">
   {authError}
  </Alert>}
     <p className="text-center">Already Registered ?<Link to ="/login">Please Login</Link></p>
         </div>
        </Container>
    );
};

export default SignUp;