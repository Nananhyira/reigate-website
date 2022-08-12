import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbars from "./components/Navbars";
import AboutUs from "./components/AboutUs";
import Produts from "./components/Products";

function Routers() {
	return (
		<Container>
			<BrowserRouter>
				<Navbars className="container-fluid" />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<AboutUs />} />
					<Route path="/product" element={<Produts />} />
				</Routes>
			</BrowserRouter>
		</Container>
	);
}

export default Routers;
