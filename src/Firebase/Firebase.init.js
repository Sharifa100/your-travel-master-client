import { initializeApp } from "firebase/app";
import context from "react-bootstrap/esm/AccordionContext";
import firebaseConfig from "./Firebase.config";

const intializeFirebase = () => {
  initializeApp(firebaseConfig);
};

export default intializeFirebase;

// steps for authentication
// --------------------------
// step-1: initial setup
// 1. firebase:create project.
// 2. create web app
// 3. get configuration
// 4.initialize firebase
// 5.Enable Auth Method

// Step-2:setup components:
// 1.create login components
// 2.create register components
// 3.create route for login and register

// Step-3: set auth system

// 1. set up sign in Method
// 2. set up signout Method
// 3.user this.state
// 4.special observer
// 5. return necessary methods and states from firebase
// ....................................................

// step -4: Create auth context hook (useauth)

// 1.create a auth context
// 2.create context provider
// 3.set context provider context value 
// 4.use auth provider in the app.js
// 5.create useAuth hook.
// ......................................

// step-5:create private route

// 1.create private route
// 2.set private route
// .............................

// step-6: Redirect after login

// 1.after login redirect user to their desired AudioDestinationNode.