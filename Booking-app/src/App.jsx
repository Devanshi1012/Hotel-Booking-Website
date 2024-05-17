import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Register from "./Components/Register";
import axios from "axios";
import Home from "./Components/Home";
import Flights from "./Components/Flights";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Stay from "./Components/Stay";
import Hotel from "./Components/Hotel";
import Profile from "./Components/Profile";
import { SearchContext } from "./context/SearchContext";

axios.defaults.baseURL = "http://localhost:4002";
function App() {
  return (
    <>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/api/hotel/:id" element={<Hotel />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/flights" element={<Flights />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
