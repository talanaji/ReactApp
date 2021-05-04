/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css";
import "./fontawesome/css/all.min.css";
import "./css/templatemo-comparto.css";
import React, { useState, useEffect } from "react";

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);
  if (loading) return <h1>Loading ...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img alt="" src={data.avatar_url} />
    </div>
  );
}

export default App;
