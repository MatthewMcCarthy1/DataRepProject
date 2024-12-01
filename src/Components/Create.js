import { useState } from "react";
// import axios from "axios"; //import axios

import '../ComponentsStyling/Create.css';

const Create = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleCreateFlashCard = (e) => {
        e.preventDefault();

        // console.log(`Title: ${title}, Text: ${text}`);

        if (title && text) {
            setTitle('');
            setText('');
        } else {

        }

        // const flashCard = {
        //     title: title,
        //     text: text,
        // };

        // axios.post('http://localhost:4000/api/movies', text)
        //     .then((res) => console.log(res.data))
        //     .catch((err) => console.log(err.data));
    }

    return (
        <div className='create-container'>

            <h1>Create Your Flash Cards</h1>

            <form onSubmit={handleCreateFlashCard}>
                <div className="form-group">
                    <label>Flashcard Title:</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Enter Title'
                    />
                </div>

                <div className="form-group">
                    <label>Flashcard Text:</label>
                    <textarea
                        type='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder='Enter Flashcard Content'
                    />
                </div>

                <button type='submit'>Create Flashcard</button>
            </form>



        </div>
    );
};

export default Create;
