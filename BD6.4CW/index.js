const express = require('express');
let { getAllBooks, getBook, getAllReviews, getReview } = require('./books.js');
const app = express();
app.use(express.json());
app.get('/api/books', async (req, res) => {
    try {
        let books = await getAllBooks();
        if (books.length === 0) return res.status(404).json({ error: "No books found" })
        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json({ error: "internal server error" });
    }
});

app.get('/api/books/:id', async (req, res) => {
    try {
        let book = await getBook(req.params.id);
        if (!book) return res.status(404).json({ error: "No book found" });
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ meesage: error.message });
    }
});

app.get('/api/reviews', async (req, res) => {
    try {
        let reviews = await getAllReviews();
        if (reviews.length === 0) return res.status(404).json({ error: "No reviews found" });
        return res.status(200).json(reviews);
    } catch (error) {
        return res.status(500).json({ error: "internal server error" });
    }
});

app.get('/api/reviews/:id', async (req, res) => {
    try {
        let review = await getReview(req.params.id);
        if (!review) return res.status(404).json({ error: "No review found" });
        return res.status(200).json(review);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = {app};