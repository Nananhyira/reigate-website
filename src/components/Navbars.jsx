import React from "react";
import {
	Navbar,
	Container,
	Nav,
	NavDropdown,
	Form,
	Button,
} from "react-bootstrap";
import r1 from "../images/l1.png";
import { Link } from "react-router-dom";

function Navbars() {
	return (
		<Container fluid="md" sticky="top">
			<Navbar bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand>
						<Link className="done" to="/">
							<img src={r1} alt="logo" />
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll>
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/about">About Us</Nav.Link>
							<NavDropdown title="Products" id="navbarScrollingDropdown">
								<NavDropdown.Item href="#action3">
									Counting Machine
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Counting Machine
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">
									Counting Machine
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="/contact">Contact Us</Nav.Link>
						</Nav>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
}

export default Navbars;