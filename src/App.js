/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css";
import "./fontawesome/css/all.min.css";
import "./css/templatemo-comparto.css";
import {Routes, Route} from "react-router-dom";
import {Header,Home, About, Contact, Footer} from "./pages";
//import React, { useState, useEffect } from "react";

function App() {
  return (<div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} /> 
    </Routes>
    <Footer/>
  </div>);
   
}

export default App;
