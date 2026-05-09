import {books} from "../data/bookData.js";
import BookCard from "../components/BookCard.jsx";

function Home(){
    return (
    <section>
		<div className="page-grid">
			{books.map((book) => (
			<BookCard key={book.id} title={book.title} content={book.description} author={book.author} bookArt={book.bookArt}/>
			))}
		</div>
    </section>
    );
}

export default Home;
