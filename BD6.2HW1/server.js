let { app } = require('./index.js');
const port = 3000;
app.listen(port, () => {
    console.log(`server started ${port}`);
});