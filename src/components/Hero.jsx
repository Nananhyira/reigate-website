import React from "react";
import { Carousel, Container } from "react-bootstrap";
import r1 from "../images/2.jpeg";
import "./styles.css";

import r3 from "../images/3.jpeg";
import r4 from "../images/4.png";

function Hero() {
	return (
		<Container
			fluid
			style={{
				padding: 0,
				boxSizing: "border-box ",
				overflowX: "hidden",
				scrollBehavior: "smooth",
				margin: 0
			}}>
			<Carousel>
				<Carousel.Item
					style={{ backgroundBlendMode: "overlay", backgroundColor: "red" }}>
					<img className="d-block w-100" src={r4} alt="First slide" />
					<Carousel.Caption>
						<h3>Banknote Processing Systems</h3>
						<p>
							Relying on innovative and reliable system for effective workflow.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={r1} alt="Second slide" />

					<Carousel.Caption>
						<h3>Banknote Processing Systems</h3>
						<p>
							Relying on innovative and reliable system for effective workflow.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 slide&bg=20232a"
						src={r3}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Banknote Processing Systems</h3>
						<p>
							Relying on innovative and reliable system for effective workflow.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
}

export default Hero;
