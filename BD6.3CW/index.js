const express = require('express');
const app = express();
app.use(express.json());
let reviews = [
    { id: 1, content: 'A good book', userId: 1 },
    { id: 2, content: 'A bad book', userId: 2 },
    { id: 3, content: 'An okay book', userId: 3 }
];

let users = [
    { id: 1, name: 'Alice', email: 'alice@gmail.com' },
    { id: 2, name: 'Bob', email: 'bob@gmail.com' }
];

async function getReviews() {
    return reviews;
};

async function getReview(id) { 
    return reviews.find(review => review.id === id);
};

async function addReview(review) {
    review.id = reviews.length + 1;
    reviews.push(review);
    return review;
};

async function getUser(id) { 
    return users.find(user => user.id === id);
};

async function addUser(user) { 
    user.id = users.length + 1;
    users.push(user);
    return user;
};
app.get('/reviews', async(req, res) => {
    let allReviews = await getReviews();
    res.json(allReviews);
});

app.get('/reviews/:id',  async(req, res) => { 
    let review = await getReview(parseInt(req.params.id));
    if (!review) {
        return res.status(404).send('Review not found');
    }
    res.json(review);
});

app.post('/reviews', async(req, res) => { 
    const review = await addReview(req.body);
    res.status(201).json(review);
});

app.get('/users/:id', async(req, res) => { 
    let user = await getUser(parseInt(req.params.id));
    if(!user)return res.status(404).send('User not found');
    res.json(user);
});

app.post('/users', async(req, res) => { 
    let user = await addUser(req.body);
    res.status(201).json(user);
});

module.exports = {app, getReviews, getReview, addReview, getUser, addUser};