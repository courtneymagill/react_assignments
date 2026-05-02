import Projects from "../components/ProjectList";

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p className="home-intro">Welcome! This site (built with React) is dedicated to p5.js programs I made in the spring of 2026. Explore to see more!</p>
            <Projects limit={6} />
        </div>
    );
}

export default Home;