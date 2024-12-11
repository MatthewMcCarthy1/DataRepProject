import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../ComponentsStyling/Edit.css';

export default function Edit(props) {
    let { id } = useParams();
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/api/flashcards/' + id)
            .then((response) => {
                setTitle(response.data.title);
                setText(response.data.text);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newFlashcard = { id, title, text };
        axios.put('http://localhost:4000/api/flashcards/' + id, newFlashcard)
            .then((res) => {
                console.log(res.data);
                navigate('/View');
            });
    }

    return (
        <div className="edit-container">

            <h1>Edit Flashcard</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Flashcard Title: </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Flashcard Text: </label>
                    <textarea
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}
