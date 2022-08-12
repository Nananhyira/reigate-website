import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routers from "./Routers";
import {Container }  from "react-bootstrap";

function App() {
	return (
		<Container fluid>
			<Routers />
		</Container>
	);
}

export default App;
