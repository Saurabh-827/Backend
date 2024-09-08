let articles = [
  { id: 1, title: 'Introduction to JavaScript', author: 'Jane Smith' },
  { id: 2, title: 'Advanced CSS Techniques', author: 'Tom Brown' },
];

let comments = [{ id: 1, articleId: 1, content: 'Very informative article!' }];
function getArticles() {
    return articles;
};

function getArticle(id) {
    return articles.find(article => article.id === parseInt(id));
};

function getComments() {
    return comments;
};

function getComment(id) {
    return comments.find(comment => comment.id === parseInt(id));
};

module.exports = { getArticles, getArticle, getComments, getComment };