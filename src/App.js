import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import DashBoard from './components/DashBoard/DashBoard';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import TravelAward from './components/TravelAward/TravelAward';
import AddServices from './components/AddServices/AddServices';
import AllServices from './components/AllServices/AllServices';
import ServicesAll from './components/ServicesAll/ServicesAll';
import Booking from './components/Booking/Booking';
import Service from './components/Service/Service';
import Orders from './components/Orders/Orders';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import ManageAllServices from './components/ManageAllServices/ManageAllServices';
import OrderStatus from './components/OrderStatus/OrderStatus';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
    <Header></Header>
    <Switch>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/servicesall">
        <ServicesAll></ServicesAll>
      </Route>
      <Route path="/services">
        <Services></Services>
      </Route>
      <Route path="/service">
        <Service></Service>
      </Route>
      <PrivateRoute path="/booking/:id">
        <Booking></Booking>
      </PrivateRoute>
      <Route path="/contact">
        <Contact></Contact>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/signup">
        <SignUp></SignUp>
      </Route>
      <Route path="/travelaward">
        <TravelAward></TravelAward>
      </Route>
      <Route path="/addservices">
        <AddServices></AddServices>
      </Route>
      <Route path="/allservices">
        <AllServices></AllServices>
      </Route>
      <PrivateRoute exact path="/dashboard">
       <DashBoard></DashBoard>
      </PrivateRoute>
      <PrivateRoute exact path="/orders">
      <Orders></Orders>
      </PrivateRoute>
      <PrivateRoute exact path="/orderstatus">
      <OrderStatus></OrderStatus>
      </PrivateRoute>
      <PrivateRoute exact path="/allorders">
      <ManageAllOrders></ManageAllOrders>
      </PrivateRoute>
      <PrivateRoute exact path="/manageallservices">
      <ManageAllServices></ManageAllServices>
      </PrivateRoute>
      <Route path="*">
        <NotFound></NotFound>
      </Route>
    </Switch>
    <Footer></Footer>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
