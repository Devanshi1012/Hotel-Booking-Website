import React from "react";
import { useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import useFetch from "../hooks/useFetch";

function Nav() {
  const location = useLocation();
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setIsDropdownOpen(false);
    navigate("/");
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="shadow-lg  w-full absolute">
        <header className="flex p-4 justify-between">
          <Link to={"/"}>
            <span
              className={`navbar-link  text-2xl ${
                location.pathname === "/" ? "text-white" : "text-black"
              }`}
            >
              VOYAGER
            </span>
          </Link>
          <div className="flex gap-4">
            <span className="navbar-link flex gap-4">
              <Link to={"/"} className="flex items-center">
                HOME
              </Link>
              <Link to={"/flights"} className="flex items-center">
                FLIGHTS
              </Link>
              <Link to={"/about"} className="flex items-center">
                ABOUT
              </Link>
              <Link to={"/contact"} className="flex items-center">
                CONTACT US
              </Link>
              {user ? (
                <div className="relative">
                  <span
                    className="uppercase cursor-pointer flex items-center border border-gray-500 rounded-full p-1"
                    onClick={toggleDropdown}
                  >
                    {user ? user.details.username : "User"}
                  </span>
                  {isDropdownOpen && (
                    <div className="absolute top-full right-0 bg-white border border-gray-500 rounded">
                      <button
                        className="block w-full text-left p-2"
                        onClick={() => {
                          handleLogout();
                          setIsDropdownOpen(false);
                        }}
                      >
                        Logout
                      </button>
                      <Link
                        to={"/profile/:id"}
                        className="block w-full text-left p-2 border-t border-gray-500"
                      >
                        Profile
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={"/login"}
                  className="flex items-center gap-2 border border-gray-400 rounded-full p-3"
                >
                  <RxHamburgerMenu />
                  <FaUserCircle />
                </Link>
              )}
            </span>
          </div>
        </header>
      </div>
    </>
  );
}

export default Nav;
