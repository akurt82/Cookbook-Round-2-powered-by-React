import React from "react";
import "./styles.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import RezeptAbdulaziz from "./RezeptAbdulaziz.js";
import RezeptKarim from "./RezeptKarim.js";
import RezeptRene from "./RezeptRene.js";

export default function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">
          <div className="MenuItem">Home</div>
        </NavLink>
        <NavLink to="/RezeptAbdulaziz">
          <div className="MenuItem">Abdülaziz</div>
        </NavLink>
        <NavLink to="/RezeptKarim">
          <div className="MenuItem">Karim</div>
        </NavLink>
        <NavLink to="/RezeptRene">
          <div className="MenuItem">Rene</div>
        </NavLink>
      </nav>
      <main>
        <div className="infobox">
          <h1>
            Willkommen auf Cookbook <span>Round 2</span>
          </h1>
          <h4>
            Hier gibt es leckere Spezialitäten aus aller Welt für den Gaumen.
            Also schnell reinschauen, inspirieren lassen und kochen!
          </h4>
          <h5>Es lohnt sich, versprochen :-)</h5>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RezeptAbdulaziz" element={<RezeptAbdulaziz />} />
          <Route path="/RezeptKarim" element={<RezeptKarim />} />
          <Route path="/RezeptRene" element={<RezeptRene />} />
        </Routes>
      </main>
      <footer>Made by us &copy; 2022</footer>
    </div>
  );
}
