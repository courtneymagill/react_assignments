// Import the CSS file for global or component styles
import "./App.css";

//---------------Simple Card Componet---------------
//This is a functional componet that accepts props, aka the child component!
//Props are parameters passed from the parent component.
function SimpleCard({title, content}) {
    return(
	<div>
	    {/*Display the title prop in a heading*/}
	    <h3>{title}</h3>

	    {/*Display the content prop in a paragraph*/}
	    <p>{content}</p>
	</div>
    );
}

function App() {
    return (
	<div>
	    {/*Page heading*/}
	    <h1>Hello World </h1>
	    {/*Render the SimpleCard component
	       Pass 'title' and 'content' as props*/}
	    <SimpleCard title="Hello Card!"content="This is my first card!"/>
	</div>
    );
}
export default App;

//This allows other files (like index.js) to import and render it 
