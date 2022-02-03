import './App.css';
import About from './components/About';
import Navbar from './components/Navbar.js';
import Text from './components/Text.js';
import React, { useState } from 'react';
import Alert from './components/Alert.js';

 import {
  BrowserRouter as Router,
  Switch,
  Route,
 // Link
 } from "react-router-dom"; 

function App() {

 // const array=['hello','these','are','some','array','elements'];

 // array.map((item)=>{
 //  console.warn(item)
 // })


 const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null);
 
 


 const showAlert = (message, type) =>{
   setAlert({
     msg: message,
     type: type
   })
 setTimeout(() => {
   setAlert(null);
 }, 3000);
  }
 const toggleMode= ()=>{
   if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor = '#184589';
     showAlert("Dark mode has been enabled", "success");
     //document.title ="Aadesh - Dark mode";
    /* setInterval(() => {
       document.title = "hello";
     }, 2000);
     setInterval(() => {
      document.title = "bye";
    }, 1500); */
   }
   else{
     setMode('light');
     document.body.style.backgroundColor = 'white';
     showAlert("Light mode has been enabled", "success");
     //document.title ="Aadesh - Light mode";
   }
 }
  return (
   <>
  <Router>  
  <Navbar title="Aadesh" mode={mode} toggleMode={toggleMode} />
 <Alert alert={alert}/> 
  <div className="container my-3" >
   <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
  <Route exact path="/">  
          <Text showAlert={showAlert} heading="Enter your text here.." mode={mode}/> 
            
          </Route>
        </Switch> 
        </div>
        </Router> 
  
  </>
  
  );
}

export default App;
