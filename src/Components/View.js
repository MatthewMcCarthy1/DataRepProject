import FlashCards from "./FlashCards";
import { useEffect, useState } from "react";
import axios from "axios";

const View = () => {

  const [flashcards, setFlashCards] = useState([]);

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
      <h3>All Your Flashcards Stored Together For Easy Viewing!</h3>
      <FlashCards myFlashcards={flashcards} />
    </div>
  );
}

export default View;