<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import db from '../firebase'; // Import Firebase configuration
import { ref, get } from "firebase/database"; // Realtime Database methods
import { format } from "date-fns"; // For date formatting

const FarmerDetails = () => {
    const { farmerId } = useParams();
    const navigate = useNavigate();
    const [realTimeData, setRealTimeData] = useState([]);
    const [farmerDetails, setFarmerDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from Firebase Realtime Database for a specific farmer
    const fetchFarmerDetails = async () => {
        setLoading(true);
        try {
            const dbRef = ref(db, `farmers/${farmerId}`);
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                setFarmerDetails(snapshot.val());
            } else {
                setError("No farmer details available");
            }
        } catch (error) {
            setError("Error fetching data from Firebase");
            console.error("Firebase fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFarmerDetails();
    }, [farmerId]);

    const formatCultivatedDate = (date) => {
        try {
            return format(new Date(date), "dd/MM/yyyy");
        } catch (e) {
            return date; // Return original if error occurs
        }
    };

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString(); // Convert timestamp to readable date string
    };
    const handleBackToDashboard = () => {
        navigate("/dashboard");
    };

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token from localStorage
        navigate("/login"); // Navigate to the login page
    };
    return (
        <div className="flex flex-col h-screen bg-[#052e16] text-white overflow-y-auto">
            <div className="fixed top-0 left-0 w-full bg-[#2f4f4f] text-white py-4 px-8 flex justify-between items-center shadow-md z-10">
                <button
                    onClick={handleBackToDashboard}
                    className="flex items-center text-white space-x-2"
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Back to Dashboard</span>
                </button>
                <div className="flex space-x-4">
                    <button>Settings</button>
                    <button>Profile</button>
                    <button onClick={handleLogout} className="text-white bg-black px-2 py-1 font-bold">Logout</button>
                </div>
            </div>

            <div className="mt-20 mb-10 px-8 space-y-4 overflow-y-auto h-screen scrollbar-hide">
                {loading ? (
                    <p>Loading farmer details...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : farmerDetails ? (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">{farmerDetails.farmerName}</h2>
                        <p>Place: {farmerDetails.place}</p>
                        <p>Number of Acres: {farmerDetails.numberOfAcres}</p>
                        <p>Crop Name: {farmerDetails.cropName}</p>
                        <p>Cultivated Date: {formatCultivatedDate(farmerDetails.cropCultivatedDate)}</p>
                        <h3 className="font-semibold text-lg">Real-Time Data:</h3>
                        <table className="min-w-full table-auto border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-bold">Humidity</th>
                                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-bold">Temperature</th>
                                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-bold">Soil Moisture</th>
                                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-bold">Timestamp</th>
                                </tr>
                            </thead>
                            <tbody>
                                {farmerDetails.realTimeData && farmerDetails.realTimeData.length > 1 && (
                                    <>
                                        <tr className="border border-gray-500">
                                            <td className="px-4 py-2 border-r border-gray-300">{farmerDetails.realTimeData[0].humidity}</td>
                                            <td className="px-4 py-2 border-r border-gray-300">{farmerDetails.realTimeData[0].temperature}</td>
                                            <td className="px-4 py-2 border-r border-gray-300">{farmerDetails.realTimeData[0].soilMoisture}</td>
                                            <td className="px-4 py-2">{new Date(farmerDetails.realTimeData[0].timestamp).toLocaleString()}</td>
                                        </tr>
                                        <tr className="border border-gray-500">
                                            <td className="px-4 py-2 border-r border-gray-300">{farmerDetails.realTimeData[1].humidity}</td>
                                            <td className="px-4 py-2 border-r border-gray-300">{farmerDetails.realTimeData[1].temperature}</td>
                                            <td className="px-4 py-2 border-r border-gray-300">{farmerDetails.realTimeData[1].soilMoisture}</td>
                                            <td className="px-4 py-2">{new Date(farmerDetails.realTimeData[1].timestamp).toLocaleString()}</td>
                                        </tr>
                                    </>
                                )}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p>No farmer details found</p>
                )}
            </div>
        </div>
    );
};

export default FarmerDetails;
=======
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import db from '../firebase'; // Import Firebase configuration
import { ref, get } from "firebase/database"; // Realtime Database methods
import { format } from "date-fns"; // For date formatting

const FarmerDetails = () => {
    const { farmerId } = useParams();
    const navigate = useNavigate();
    const [realTimeData, setRealTimeData] = useState([]);
    const [farmerDetails, setFarmerDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from Firebase Realtime Database for a specific farmer
    const fetchFarmerDetails = async () => {
        setLoading(true);
        try {
            const dbRef = ref(db, `farmers/${farmerId}`);
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                setFarmerDetails(snapshot.val());
            } else {
                setError("No farmer details available");
            }
        } catch (error) {
            setError("Error fetching data from Firebase");
            console.error("Firebase fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFarmerDetails();
    }, [farmerId]);

    const formatCultivatedDate = (date) => {
        try {
            return format(new Date(date), "dd/MM/yyyy");
        } catch (e) {
            return date; // Return original if error occurs
        }
    };

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString(); // Convert timestamp to readable date string
    };
    const handleBackToDashboard = () => {
        navigate("/dashboard");
    };

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token from localStorage
        navigate("/login"); // Navigate to the login page
    };
    return (
        <div className="flex flex-col h-screen bg-[#052e16] text-white overflow-y-auto">
            <div className="fixed top-0 left-0 w-full bg-[#2f4f4f] text-white py-4 px-8 flex justify-between items-center shadow-md z-10">
                <button
                    onClick={handleBackToDashboard}
                    className="flex items-center text-white space-x-2"
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Back to Dashboard</span>
                </button>
                <div className="flex space-x-4">
                    <button>Settings</button>
                    <button>Profile</button>
                    <button onClick={handleLogout} className="text-white bg-black px-2 py-1 font-bold">Logout</button>
                </div>
            </div>

            <div className="mt-20 mb-10 px-8 space-y-4 overflow-y-auto h-screen scrollbar-hide">
                {loading ? (
                    <p>Loading farmer details...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : farmerDetails ? (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">{farmerDetails.farmerName}</h2>
                        <p>Place: {farmerDetails.place}</p>
                        <p>Number of Acres: {farmerDetails.numberOfAcres}</p>
                        <p>Crop Name: {farmerDetails.cropName}</p>
                        <p>Cultivated Date: {formatCultivatedDate(farmerDetails.cropCultivatedDate)}</p>
                        <h3 className="font-semibold text-lg">Real-Time Data:</h3>
                        <table className="min-w-full table-auto border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-bold">Humidity</th>
                                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-bold">Temperature</th>
                                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-bold">Soil Moisture</th>
                                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-bold">Timestamp</th>
                                </tr>
                            </thead>
                            <tbody>
                                {farmerDetails.realTimeData && farmerDetails.realTimeData.length > 1 && (
                                    <>
                                        <tr className="border border-gray-500">
                                            <td className="px-4 py-2 border-r border-gray-300">{farmerDetails.realTimeData[0].humidity}</td>
                                            <td className="px-4 py-2 border-r border-gray-300">{farmerDetails.realTimeData[0].temperature}</td>
                                            <td className="px-4 py-2 border-r border-gray-300">{farmerDetails.realTimeData[0].soilMoisture}</td>
                                            <td className="px-4 py-2">{new Date(farmerDetails.realTimeData[0].timestamp).toLocaleString()}</td>
                                        </tr>
                                        <tr className="border border-gray-500">
                                            <td className="px-4 py-2 border-r border-gray-300">{farmerDetails.realTimeData[1].humidity}</td>
                                            <td className="px-4 py-2 border-r border-gray-300">{farmerDetails.realTimeData[1].temperature}</td>
                                            <td className="px-4 py-2 border-r border-gray-300">{farmerDetails.realTimeData[1].soilMoisture}</td>
                                            <td className="px-4 py-2">{new Date(farmerDetails.realTimeData[1].timestamp).toLocaleString()}</td>
                                        </tr>
                                    </>
                                )}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p>No farmer details found</p>
                )}
            </div>
        </div>
    );
};

export default FarmerDetails;
>>>>>>> 76a5987 (second commit)
