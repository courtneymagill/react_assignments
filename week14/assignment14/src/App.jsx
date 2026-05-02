import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import './css/App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
import NavBar from './components/NavBar';

function Footer() {
  return (
    <footer className="app-footer">
      <p>© 2026 My React App. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<ProjectsPage/>} />
    </Routes>
    </Router>
  );
}

export default App;
