import FlashcardItem from "./FlashcardItem";

const FlashCards = (props) => {
    return props.myFlashcards.map(
        (flashcard) => {
            return <FlashcardItem myflashcard={flashcard} key={flashcard._id} Reload={props.ReloadData} />
        }
    );
}

export default FlashCards;