import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import '../ComponentsStyling/ViewFlashcard.css';

const FlashcardItem = (props) => {
  useEffect(() => {
    console.log("Flashcard Item:", props.myflashcard);
  }, [props.myflashcard]);

  const handleDelete = (e) => {
    e.preventDefault();

    axios.delete('http://localhost:4000/api/flashcards/' + props.myflashcard._id)
      .then(() => {
        props.Reload();
      })
      .catch((error) => {
        console.error("Error deleting flashcard:", error);
      });
  };

  return (
    <div className="card-container">
      <Card>
        <Card.Header>{props.myflashcard.title}</Card.Header>
        <Card.Body>
          <p>{props.myflashcard.text}</p>
        </Card.Body>
        <div className="button-container">
          <Link className="btn btn-primary" to={"/Edit/" + props.myflashcard._id}>Edit</Link>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
      </Card>
    </div>
  );
}

export default FlashcardItem;