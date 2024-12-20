import FlashCards from "./FlashCards";
import { useEffect, useState } from "react";
import axios from "axios";
import '../ComponentsStyling/ViewFlashcard.css';

const View = () => {

  const [flashcards, setFlashCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  //reloads flashcard data
  const Reload = (searchQuery = "") => {
    console.log("Reloading flashcard data...");
    axios.get(`http://localhost:4000/api/flashcards?search=${searchQuery}`) //searchQuery to filter flaschards
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

  //handles search input change event 
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query); //update the searchQuery state with new value
    Reload(query);
  };

  return (
    <div>
      <h3 className="view-title">All Your Flashcards Stored Together For Easy Viewing!</h3>

      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search flashcards..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <FlashCards myFlashcards={flashcards} ReloadData={Reload} />
    </div>
  );
}

export default View;