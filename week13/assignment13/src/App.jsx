import './css/App.css'
import Home from "./pages/Home";
import Projects from "./components/ProjectList";
import NavBar from './pages/NavBar';

function Footer() {
  return (
    <footer className="app-footer">
      <p>© 2026 My React App. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Projects/>
    </div>
  );
}

export default App;
