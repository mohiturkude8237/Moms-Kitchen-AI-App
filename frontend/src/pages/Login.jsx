// import axios from "axios";
// import React from "react";
// import { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({...form, [e.target.name]:e.target.value});
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');

//     try{
//       const res  = await axios.post('https://mom-skitchen-02.onrender.com/api/login', form);
//       setMessage(res.data.message || 'Login successfull!!');

//           localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user', JSON.stringify(res.data.user));
      
//       navigate('/home');
//     }catch(error){
//       setMessage(err.response?.data?.message || err.response?.data?.error || 'Something went wrong');
//     }finally{
//       setLoading(false)
//     }
//   }

//   // const handleLogin = () => {
//   //   // Example: set auth token to simulate login
//   //   localStorage.setItem("authToken", "your_token_here");
//   //   navigate("/home");
//   // };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h1 className="text-4xl font-bold mb-4 text-center">Welcome Back</h1>
//         <p className="mb-6 text-center text-gray-600">
//           Please log in to your account
//         </p>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <input
//               type="text"
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
//               onChange={handleChange}
//               placeholder="Password"
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="mb-4 flex justify-between text-sm text-gray-600">
//             <label className="flex items-center gap-2">
//               <input type="checkbox" className="accent-blue-900" />
//               Remember me
//             </label>
//             <a href="#" className="hover:underline text-blue-700">
//               Forgot Password?
//             </a>
//           </div>

//           <div className="mb-4">
//             <button
//               type="submit"
//               className="w-full p-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition"
//               disabled={loading}
//             >
//               {loading ? 'Logging in..': 'Login'}
//             </button>
//           </div>

//           <div className="text-center text-sm text-gray-600">
//             <span>Don't have an account? </span>
//             <NavLink to="/signup" className="text-blue-700 hover:underline">
//               Sign Up
//             </NavLink>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/login",
        form
      );
      setMessage(res.data.message || "Login successful!!");

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome Back</h1>
        <p className="mb-6 text-center text-gray-600">
          Please log in to your account
        </p>

        {message && (
          <div className="mb-4 text-center text-sm text-green-600">{message}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
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

          <div className="mb-4 flex justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-900" />
              Remember me
            </label>
            <a href="#" className="hover:underline text-blue-700">
              Forgot Password?
            </a>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full p-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          <div className="text-center text-sm text-gray-600">
            <span>Don't have an account? </span>
            <NavLink to="/signup" className="text-blue-700 hover:underline">
              Sign Up
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
