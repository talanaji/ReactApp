/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css";
import "./fontawesome/css/all.min.css";
import "./css/templatemo-comparto.css";
import {Routes, Route} from "react-router-dom";
import {Header,Home, About, Contact,Gallery, Footer, Whoops404} from "./pages";
//import React, { useState, useEffect } from "react";

function App() {
  return (<div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} /> 
      <Route path="/gallery" element={<Gallery />} /> 
      <Route path="*" element={<Whoops404/>}/>
    </Routes>
    <Footer  year ={new Date().getFullYear()}/>
  </div>);
   
}
export default App;
