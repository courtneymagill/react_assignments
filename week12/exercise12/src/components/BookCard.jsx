function BookCard({title, author, content, bookArt}) {
    return(
		<div>
		<h3>{title}</h3>
        <p>{author}</p>
        <img src={bookArt}/>
		<p>{content}</p>
		</div>
    );
}

export default BookCard;