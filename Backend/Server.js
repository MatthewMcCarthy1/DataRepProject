const express = require('express');
const app = express();
const port = 4000;

//CORS middleware //////
const cors = require('cors');
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
///////////

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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});