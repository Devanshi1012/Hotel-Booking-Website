import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/api/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

  return (
    <div className="p-4  ">
      <h1 className="text-4xl text-center mb-4 mt-44">LOGIN</h1>
      <div className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="username"
          id="username"
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
          disabled={loading}
          onClick={handleClick}
        >
          Login
        </button>

        <div className="text-center py-2 text-gray-500">
          Don't have an account yet?{" "}
          <Link className="underline text-black" to={"/register"}>
            Register Now
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

export default Login;
