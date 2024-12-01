import '../ComponentsStyling/Home.css'

const Home = () => {
    return (
        <div className='page-content'>

            <div className='home-container'>
                <h1 className='home-title'>Welcome to Flashcards!</h1>
                <p className='home-subtitle'>Your very own personal Flashcard storage application where creating, reading, updating and deleting flashcards is easy and straight forward.</p>
            </div>

            <div className='app-info'>
                <p className='info-title'>Why Choose This App?</p>
                <p className='info-description'>
                    This Flashcard App is designed to help you learn and organize your study materials with ease. Whether you're creating, viewing, updating, or deleting flashcards, our app offers a smooth and efficient experience.
                </p>
                <ul className='info-list'>
                    <li><i className='fas fa-plus-circle'></i><strong> Create Flashcards:</strong> Easily add new cards with text, images, or links to reinforce your learning.</li>
                    <li><i className='fas fa-eye'></i><strong> View Flashcards:</strong> Browse your collection and review your cards in an organized and user-friendly interface.</li>
                    <li><i className='fas fa-edit'></i><strong> Update Flashcards:</strong> Modify existing flashcards to ensure your study materials are always up to date.</li>
                    <li><i className='fas fa-trash-alt'></i><strong> Delete Flashcards:</strong> Remove cards that are no longer needed to keep your collection neat and manageable.</li>
                </ul>

                <p className='info-conclusion'>
                    With an intuitive design and simple controls, this app makes it easy to create and manage your flashcards for efficient learning.
                </p>
            </div>

        </div>
    );
}

export default Home;