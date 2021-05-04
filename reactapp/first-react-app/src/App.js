/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css";
import "./fontawesome/css/all.min.css";
import "./css/templatemo-comparto.css"; 
import React, { useState, useEffect } from "react"; 

function App({login}) {
  const [data,setData]=useState(null);
  useEffect(()=>{
    fetch(`https://api.github.com/users/${login}`)
    .then((response)=>response.json())
    .then(setData);
  },[]); 
  if(data){
    return <div>{JSON.stringify(data)}</div>;
  }
  return <div>No User Data</div>

}

export default App;
