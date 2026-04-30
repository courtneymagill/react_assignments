import "./css/app.css";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/NavBar.jsx";

import { HashRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
    return (
		<div>
			<HashRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</HashRouter>
		</div>
    );
}

export default App;
