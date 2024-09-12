let { app } = require('./index.js');
const port = 3000;

app.listen(3000, () => {
    console.log(`Server is listening on port ${port}`);
});