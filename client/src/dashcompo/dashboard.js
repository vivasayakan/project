<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import db from '../firebase'; // Import Firebase configuration
import { ref, get } from "firebase/database"; // Realtime Database methods
import { format } from "date-fns"; // For date formatting

const Dashboard = () => {
    const navigate = useNavigate();
    const [farmers, setFarmers] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null); // Add error state

    // Check for token and navigate to login if not found
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    // Fetch data from Firebase Realtime Database
    const fetchFarmers = async () => {
        setLoading(true);
        try {
            const dbRef = ref(db, "farmers");
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                const farmerData = [];
                snapshot.forEach((childSnapshot) => {
                    farmerData.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val(),
                    });
                });
                setFarmers(farmerData);
            } else {
                setError("No data available");
                console.error("No data available in the database");
            }
        } catch (error) {
            setError("Error fetching data from Firebase Realtime Database");
            console.error("Firebase fetch error:", error);  // More detailed error
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchFarmers();
    }, []);

    // Format the cultivated date if it's a string (adjust for timestamp format)
    const formatCultivatedDate = (date) => {
        try {
            return format(new Date(date), "dd/MM/yyyy");
        } catch (e) {
            return date; // return the original if there's an error
        }
    };

    const handleButtonClick = (farmerId) => {
        navigate(`/farmers/${farmerId}`);
    };
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token from localStorage
        navigate("/login"); // Navigate to the login page
    };

    return (
        <div className="flex flex-col h-screen bg-[#052e16] text-white overflow-y-auto ">
            <div className="fixed top-0 left-0 w-full bg-[#2f4f4f] text-white py-4 px-8 flex justify-between shadow-md z-10">
                <h1 className="font-bold text-lg">Welcome ADMIN</h1>
                <div className="flex space-x-4">
                    <button>Settings</button>
                    <button>Profile</button>
                    <button onClick={handleLogout} className="text-white bg-black px-2 py-1 font-bold">Logout</button>
                </div>
            </div>

           <div className="mt-20 mb-10 px-8 space-y-4 overflow-y-auto h-screen scrollbar-hide">
                {loading ? (
                    <p>Loading farmers...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : farmers.length > 0 ? (
                    farmers.map((farmer) => (
                        <button
                            key={farmer.id}
                            onClick={() => handleButtonClick(farmer.id)}
                            className="relative flex flex-col w-full gap-2 px-4 py-4 bg-black text-white font-bold rounded-md hover:bg-white hover:text-black transition duration-300"
                        >
                            <div className="flex items-center justify-between w-full">
                                <span>{farmer.farmerName}</span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                            <div className="text-sm text-left w-full">
                                <p>Crop Name: {farmer.cropName}</p>
                                <p>Cultivated Date: {formatCultivatedDate(farmer.cropCultivatedDate)}</p>
                            </div>
                        </button>
                    ))
                ) : (
                    <p>No farmers found</p>
                )}
            </div>

        </div>
    );
};

export default Dashboard;
=======
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import db from '../firebase'; // Import Firebase configuration
import { ref, get } from "firebase/database"; // Realtime Database methods
import { format } from "date-fns"; // For date formatting

const Dashboard = () => {
    const navigate = useNavigate();
    const [farmers, setFarmers] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null); // Add error state

    // Check for token and navigate to login if not found
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    // Fetch data from Firebase Realtime Database
    const fetchFarmers = async () => {
        setLoading(true);
        try {
            const dbRef = ref(db, "farmers");
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                const farmerData = [];
                snapshot.forEach((childSnapshot) => {
                    farmerData.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val(),
                    });
                });
                setFarmers(farmerData);
            } else {
                setError("No data available");
                console.error("No data available in the database");
            }
        } catch (error) {
            setError("Error fetching data from Firebase Realtime Database");
            console.error("Firebase fetch error:", error);  // More detailed error
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchFarmers();
    }, []);

    // Format the cultivated date if it's a string (adjust for timestamp format)
    const formatCultivatedDate = (date) => {
        try {
            return format(new Date(date), "dd/MM/yyyy");
        } catch (e) {
            return date; // return the original if there's an error
        }
    };

    const handleButtonClick = (farmerId) => {
        navigate(`/farmers/${farmerId}`);
    };
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token from localStorage
        navigate("/login"); // Navigate to the login page
    };

    return (
        <div className="flex flex-col h-screen bg-[#052e16] text-white overflow-y-auto ">
            <div className="fixed top-0 left-0 w-full bg-[#2f4f4f] text-white py-4 px-8 flex justify-between shadow-md z-10">
                <h1 className="font-bold text-lg">Welcome ADMIN</h1>
                <div className="flex space-x-4">
                    <button>Settings</button>
                    <button>Profile</button>
                    <button onClick={handleLogout} className="text-white bg-black px-2 py-1 font-bold">Logout</button>
                </div>
            </div>

           <div className="mt-20 mb-10 px-8 space-y-4 overflow-y-auto h-screen scrollbar-hide">
                {loading ? (
                    <p>Loading farmers...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : farmers.length > 0 ? (
                    farmers.map((farmer) => (
                        <button
                            key={farmer.id}
                            onClick={() => handleButtonClick(farmer.id)}
                            className="relative flex flex-col w-full gap-2 px-4 py-4 bg-black text-white font-bold rounded-md hover:bg-white hover:text-black transition duration-300"
                        >
                            <div className="flex items-center justify-between w-full">
                                <span>{farmer.farmerName}</span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                            <div className="text-sm text-left w-full">
                                <p>Crop Name: {farmer.cropName}</p>
                                <p>Cultivated Date: {formatCultivatedDate(farmer.cropCultivatedDate)}</p>
                            </div>
                        </button>
                    ))
                ) : (
                    <p>No farmers found</p>
                )}
            </div>

        </div>
    );
};

export default Dashboard;
>>>>>>> 76a5987 (second commit)
