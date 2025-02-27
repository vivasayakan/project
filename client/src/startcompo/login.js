<<<<<<< HEAD
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react';

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
	
			localStorage.setItem("token", res.data.token);
			window.location = "/dashboard";

			navigate("/dashboard");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (

		<div
			className="flex justify-center items-center lg:py-32 lg:px-10 gap-6 px-2 h-screen"
			style={{
				backgroundImage: "url('/agbg.jpg')",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			}}
		>

			<div className=' lg:w-[70%] lg:h-[100%] px-1 lg:py-10 py-4 bg-[#052e16] shadow-2xl shadow-black flex flex-col gap-6 rounded-b-3xl z-10'>
				<form onSubmit={handleSubmit}>
					<div className='py-2'>
						<p className='text-center font-bold text-2xl text-white pb-2' style={{ textShadow: '2px 2px 3px rgba(255,255,255,255)' }}>Login</p>

					</div>
					<div className='flex flex-col gap-2 px-32'>
						<input type="email" name="email" onChange={handleChange} value={data.email} required className='border rounded-lg text-white shadow-white shadow-lg bg-black px-3 py-2 placeholder-white hover:bg-[#525152]' placeholder='Email'></input>
						<input type="password" name="password" onChange={handleChange} value={data.password} required className='border rounded-lg text-white shadow-white shadow-lg bg-black px-3 py-2 placeholder-white hover:bg-[#525152]' placeholder='Password'></input>

					</div> <br></br>

					<div className='flex flex-col gap-2 pt-2'>
						<div className='flex justify-center'><button type="submit" className='bg-white transition duration-300 ease-out ease-in text-black font-bold px-2 py-2 rounded-lg hover:bg-black hover:text-white'>Login</button></div>

						<Link to="/signup"><p className='text-white font-bold text-xs flex justify-center pt-2 hover:text-[#FF0000]'>Don't have an account yet? Sign up!</p></Link>
					</div>


				</form>
			</div>
		</div>

	);
};

=======
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react';

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// const url = "http://localhost:8080/api/auth";
			// const { data: res } = await axios.post(url, data);
	
			// localStorage.setItem("token", res.data.token);
			// window.location = "/dashboard";

			navigate("/dashboard");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (

		<div
			className="flex justify-center items-center lg:py-32 lg:px-10 gap-6 px-2 h-screen"
			style={{
				backgroundImage: "url('/agbg.jpg')",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			}}
		>

			<div className=' lg:w-[70%] lg:h-[60%] px-1 lg:py-10 py-4 bg-[#052e16] shadow-2xl shadow-black flex flex-col gap-6 rounded-b-3xl z-10'>
				<form onSubmit={handleSubmit}>
					<div className='py-2'>
						<p className='text-center font-bold text-2xl text-white pb-2' style={{ textShadow: '2px 2px 3px rgba(255,255,255,255)' }}>Login</p>

					</div>
					<div className='flex flex-col gap-2 px-32'>
						<input type="email" name="email" onChange={handleChange} value={data.email} required className='border rounded-lg text-white shadow-white shadow-lg bg-black px-3 py-2 placeholder-white hover:bg-[#525152]' placeholder='Email'></input>
						<input type="password" name="password" onChange={handleChange} value={data.password} required className='border rounded-lg text-white shadow-white shadow-lg bg-black px-3 py-2 placeholder-white hover:bg-[#525152]' placeholder='Password'></input>

					</div> <br></br>

					<div className='flex flex-col gap-2 pt-2'>
						<div className='flex justify-center'><button type="submit" className='bg-white transition duration-300 ease-out ease-in text-black font-bold px-2 py-2 rounded-lg hover:bg-black hover:text-white'>Login</button></div>

						<Link to="/signup"><p className='text-white font-bold text-xs flex justify-center pt-2 hover:text-[#FF0000]'>Don't have an account yet? Sign up!</p></Link>
					</div>


				</form>
			</div>
		</div>

	);
};

>>>>>>> 76a5987 (second commit)
export default Login;