import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { RegisterContext } from "../context/RegisterContext";

function Register() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const { loading, error, dispatch } = useContext(RegisterContext);
  const navigate = useNavigate();
  const register = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      // Make API request to register user
      const res = await axios.post("/api/auth/register", credentials);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
      navigate("/login");
    } catch (error) {
      dispatch({ type: "REGISTER_FAILURE", payload: error.response.data });
      throw error;
    }
  };
  return (
    <div className="p-4 ">
      <h1 className="text-4xl text-center mb-4 mt-44 ">REGISTER</h1>
      <div className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="your@email.com"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <button
          className="bg-blue-600 w-full p-2 text-white rounded-2xl"
          onClick={register}
        >
          Register
        </button>
        <div className="text-center py-2 text-gray-500">
          Already a member?{" "}
          <Link className="underline text-black" to={"/login"}>
            Login
          </Link>
        </div>
        {error && (
          <span className="rounded-full m-24 text-white bg-red-500 p-2">
            {error.message}
          </span>
        )}
      </div>
    </div>
  );
}

export default Register;
