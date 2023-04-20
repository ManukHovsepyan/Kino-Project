import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoutesNavigation from "./constants/route"
import Navbar from './layouts/navbar/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Router>
          <Navbar />
            <Routes>
              {RoutesNavigation.map((route, index) => (
                <Route
                  key={index} 
                  path={route.path}
                  element={route.element} 
                  />
                  // exact={index === 0}
              ))}
            </Routes>
        </Router>
    </>
  );
}

export default App;
