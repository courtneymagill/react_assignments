import {useState} from 'react';


function BookCard({title, author, content, bookArt}) {
  const [showDescription, setShowDescription] = useState(false);

function toggleDescription(){
    setShowDescription((prevState)=> !prevState); 
  }

    return(
      <div className="book-card">
        <h3>{title}</h3>
        <p>{author}</p>
        <img className="book-img" src={bookArt}/>

        <button onClick={toggleDescription}>
          {showDescription ? "Close" : "Book Description"}
        </button>
        {showDescription && <p>{content}</p>}
      </div>
    );
}

export default BookCard;
