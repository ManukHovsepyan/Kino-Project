import * as React from 'react';
import Home from "../pages/home/Home"
import About from "../pages/about/About"
const RoutesNavigation = [
    {path: "/", element:<Home />},
    {path: "/about",element: <About />}
]

export default RoutesNavigation