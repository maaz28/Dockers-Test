import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const App = () => {
  const [visits, setVisits] = useState(0);

  const getVisits = async () => {
    const response = await axios.get("/api/");
    setVisits(response.data.visits);
  };

  useEffect(() => {
    getVisits();
  }, []);

  return <h1>Number Of Visits: {visits}</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
