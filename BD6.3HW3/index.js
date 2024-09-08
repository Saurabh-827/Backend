const express = require('express');
const app = express();
app.use(express.json());

const recipes = [
  { id: 1, name: 'Spaghetti Bolognese', cuisine: 'Italian', difficulty: 'Medium' },
  { id: 2, name: 'Masala', cuisine: 'Indian', difficulty: 'Hard' }
];
// functions here
async function getRecipes() {
    return recipes;
};

async function getRecipeById(id) {
    return recipes.find((r) => r.id == id);
};

async function addRecipe(recipe) {
    recipe.id = recipes.length + 1;
    recipes.push(recipe);
    return recipe;
}

// endpoint to get all recipes
app.get('/recipes', async (req, res) => {
    return res.json(await getRecipes());
});

// endpoint to get recipe by id
app.get('/recipes/:id', async (req, res) => {
    let recipe = await getRecipeById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    return res.status(200).json(recipe);
});

// endpoint to add a recipe
app.post('/recipes', async (req, res) => { 
    return res.status(201).send(await addRecipe(req.body));
});

module.exports = {app, getRecipes, getRecipeById, addRecipe};