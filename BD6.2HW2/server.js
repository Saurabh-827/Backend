let { app } = require('./index.js');
const port = 3000;

app.listen(port, () => {
    console.log(`Server is started at port ${port}`);
})