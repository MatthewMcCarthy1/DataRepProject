import FlashcardItem from "./FlashcardItem";

const Flashcards = (props)=>{
    return props.myflashcards.map(
        (flashCard)=>{
            return <FlashcardItem myflashcard={flashCard} key={flashCard._id} />
        }
    );
}

export default Flashcards;