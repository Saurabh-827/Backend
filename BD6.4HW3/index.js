const express = require('express');
const app = express();

let { getArticles, getArticle, getComments, getComment } = require('./articles.js');
app.use(express.json());
app.get('/articles', async (req, res) => {
    try {
        const articles = await getArticles();
        if (articles.length === 0) {
            return res.status(404).json({ error: 'No articles found' });
        }
        res.status(200).send(articles);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/articles/:id', async (req, res) => {
    try {
        const article = await getArticle(req.params.id);
        if (!article) {
            return res.status(404).json({ error: 'Article not found' });
        }
        res.status(200).send(article);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/comments', async (req, res) => {
    try {
        const comments = await getComments();
        if (comments.length === 0) {
            return res.status(404).json({ error: 'No comments found' });
        }
        res.status(200).send(comments);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/comments/:id', async (req, res) => {
    try {
        const comment = await getComment(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        res.status(200).send(comment);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = {app};