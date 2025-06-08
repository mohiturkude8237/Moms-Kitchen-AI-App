// Original code

// import React from "react";
// import { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import axios from 'axios';
// const Signup = () => {
//   const [form, setForm] = useState({ fullname: "", email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();
//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try{
//       const res = await axios.post('https://mom-skitchen-02.onrender.com/api/signup', form);
//       setMessage(res.data.message);
//     }catch(err){
//       setMessage(err.response?.data?.message || 'user already exist');
//     }
//   }

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h1 className="text-4xl font-bold mb-4 text-center">Create Account</h1>
//         <p className="mb-6 text-center text-gray-600">
//           Please sign up to create a new account
//         </p>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="fullname"
//               value={form.fullname}
//               onChange={handleChange}
//               placeholder="Full Name"
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Email Address"
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               placeholder="Password"
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           {/* <div className="mb-4">
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div> */}

//           <div className="mb-4">
//             <input
//               type="submit"
//               value="Sign Up"
//               className="w-full p-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition"
//             />
//           </div>

//           <div className="text-center text-sm text-gray-600">
//             <span>Already have an account? </span>
//             <NavLink to="/login" className="text-blue-600 hover:underline">
//               Log In
//             </NavLink>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [form, setForm] = useState({ fullname: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://moms-kitchen-ai-app.onrender.com/api/signup",
        form
      );
      setMessage(res.data.message);
      // Optionally redirect after signup
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setMessage(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "User already exists"
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-center">Create Account</h1>
        <p className="mb-6 text-center text-gray-600">
          Please sign up to create a new account
        </p>

        {message && (
          <div className="mb-4 text-center text-sm text-green-600">{message}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="submit"
              value="Sign Up"
              className="w-full p-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition"
            />
          </div>

          <div className="text-center text-sm text-gray-600">
            <span>Already have an account? </span>
            <NavLink to="/login" className="text-blue-600 hover:underline">
              Log In
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
