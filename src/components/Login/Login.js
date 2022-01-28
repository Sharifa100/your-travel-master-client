import React, { useState } from "react";
import "./Login.css";
import {  Alert, Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Link,useLocation,useHistory } from "react-router-dom";
import img1 from '../../assets/images/landing-slider-img-1.png';
import useAuth from "../../Hook/useAuth";

const Login = () => {
  
  const [loginData, setloginData] = useState({});
  const{user, loginUser,signInUsingGoogle, isLoading,  authError} = useAuth();

const location = useLocation();
const history = useHistory();

  const handleOnChange = e => {
const field = e.target.name;
const value = e.target.value;
const newLoginData = {...loginData};
newLoginData[field] = value;
console.log(newLoginData);
setloginData(newLoginData);
// console.log(field, value);
  }
  const  handleLoginSubmit = e => {
    loginUser(loginData.email, loginData.password, location,history);
// alert('hello')
    e.preventDefault();
// console.log('hello there i am working');
  } 
  // console.log(handleGoogleLogin());
const handleGoogleSignIn =()=>{
  signInUsingGoogle(location,history)

}
  return (
   <Container>
     <Row>
    <Col xs={12} md={7}>
    <div  style={{maxWidth:"500px", width:"100%"}}>
    <h2>Login Now</h2>
      <Form onSubmit={handleLoginSubmit}>
  <Form.Group onChange={handleOnChange} className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group onChange={handleOnChange} className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button  style={{maxWidth:"500px", width:"100%"}}  variant="primary" type="submit">
    Submit
  </Button>
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

</Form>
<p className="text-center">New user ?<Link to ="/signup">Register Now</Link></p>
<p className="text-center mt-3">--------------------------------or---------------------------------</p>
<button  className="btn btn-warning text-center"
onClick={ handleGoogleSignIn}
> Log in with Google</button>
    </div>
    </Col>
    <Col xs={6} md={5}>
      <img src={img1} className="mt-5" style={{width:"100%" }} alt="" />
    </Col>
  </Row>
   
   </Container>
  );
};

export default Login;
