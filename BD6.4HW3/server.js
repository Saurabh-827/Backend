let { app } = require('./index.js');
let port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});