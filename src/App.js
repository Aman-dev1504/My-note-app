import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Navbar from './components/layout/navbar';
function App() {
  return (
   <Router>
   
     <Navbar/>
    
   </Router>
    
  );
}

export default App;
