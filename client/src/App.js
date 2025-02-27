<<<<<<< HEAD
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./startcompo/signup";
import Login from "./startcompo/login";
import Dashboard from "./dashcompo/dashboard";
import FarmerDetails from './dashcompo/farmerdetails';
import './index.css';


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/farmers/:farmerId" element={<FarmerDetails />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
=======
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      <h1>Farming Dashboard</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            Temperature: {item.temperature}°C, Humidity: {item.humidity}%, Soil Moisture: {item.soil_moisture}%
          </li>
        ))}
      </ul>
    </div>
  );
>>>>>>> 76a5987 (second commit)
}

export default App;