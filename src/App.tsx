import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PulseAppBar from "./components/header/PulseAppBar";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import World from "./components/world/World";
import MeetUs from "./components/meetus/MeetUs";
import About from "./components/about/About";
import Episodes from "./components/episodes/Episodes";

function App() {
  return (
    <div className="App">
      <PulseAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projectpulse" element={<Home />} />
        <Route path="world" element={<World />} />
        <Route path="meet%20us" element={<MeetUs />} />
        <Route path="about" element={<About />} />
        <Route path="episodes" element={<Episodes />} />
      </Routes>
    </div>
  );
}

export default App;
