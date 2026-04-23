// Import the CSS file for global or component styles
import "./css/app.css";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/NavBar.jsx";

function App() {
    return (
		<div>
			<Navbar/>
			<Home/>
			<Footer/>
		</div>
    );
}

export default App;





//This allows other files (like index.js) to import and render it 
