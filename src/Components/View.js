import FlashCards from "./FlashCards";
import { useEffect, useState } from "react";
import axios from "axios";
import '../ComponentsStyling/ViewFlashcard.css';

const View = () => {

  const [flashcards, setFlashCards] = useState([]);

  const Reload = () => {
    console.log("Reloading flashcard data...");
    axios.get('http://localhost:4000/api/flashcards')
      .then((response) => {
        setFlashCards(response.data);
      })
      .catch((error) => {
        console.error("Error reloading data:", error);
      });
  };

  useEffect(() => {
    Reload();
  }, []);

  useEffect(() => {
    
    axios.get('http://localhost:4000/api/flashcards')
      .then((response) => {
        console.log(response.data);
        setFlashCards(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  return (
    <div>
      <h3 className="view-title">All Your Flashcards Stored Together For Easy Viewing!</h3>
      <FlashCards myFlashcards={flashcards} ReloadData={Reload} />
    </div>
  );
}

export default View;