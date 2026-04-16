// Import the CSS file for global or component styles
import "./css/app.css";
import BookCard from "./components/BookCard";
import Footer from "./components/Footer";
import {books} from "./data/bookData.js";

function App() {
    return (
		<div>
			{/*Page heading*/}
				<h1>Gothic Horror Novels</h1>
			{books.map((book) => (
			<BookCard key={book.id} title={book.title} content={book.description} author={book.author} bookArt={book.bookArt}/>
			))}
			<Footer />
		</div>
    );
}

export default App;





//This allows other files (like index.js) to import and render it 
