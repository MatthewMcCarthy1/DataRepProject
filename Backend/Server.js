const express = require('express');
const app = express();
const port = 4000;

//CORS middleware //////
const cors = require('cors');
app.use(cors());

//POST middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//////

//mongooseDB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.jxb91.mongodb.net/');

const flashcardSchema = new mongoose.Schema({
    title: String,
    text: String
});

const flashcardModel = mongoose.model('Flashcard', flashcardSchema);

app.post('/api/flashcards', async (req, res) => {

    const { title, text } = req.body;

    const newFlashcard = new flashcardModel({ title, text });
    await newFlashcard.save();

    res.status(201).json({ message: 'Flashcard created successfully', flashcard: newFlashcard });
})

app.get('/api/flashcards', async (req, res) => {
    const flashcards = await flashcardModel.find({});
    res.json(flashcards);
});

app.get('/api/flashcards/:id', async (req, res) => {
    const flashcard = await flashcardModel.findById(req.params.id);
    res.send(flashcard);
});

app.put('/api/flashcards/:id', async (req, res) => {
    let flashcard = await flashcardModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(flashcard);
});

app.delete('/api/flashcards/:id', async (req, res) => {
    // console.log('Deleting flashcard with ID:', req.params.id);
    const flashcard = await flashcardModel.findByIdAndDelete(req.params.id,
        
    );
    res.status(200).send({ message: "Flashcard deleted successfully", flashcard });
});

//server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});