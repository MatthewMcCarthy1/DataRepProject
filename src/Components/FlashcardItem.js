import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const FlashcardItem = (props)=> {
  useEffect(() => {
    console.log("Flashcard Item:", props.myflashcard);
  }, [props.myflashcard]); 

  return (
    <div>
      <Card>
        <Card.Header>{props.myflashcard.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{props.myflashcard.text}</p>
          </blockquote>
        </Card.Body>
        <Link className="btn btn-primary" to={"/Edit/"+props.myflashcard._id}>Edit</Link>
      </Card>
    </div>
  );
}

export default FlashcardItem;