const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hello people!');
});

app.get('/paramRequest', (req, res) => {
    res.send(req.query)
})

app.listen(8000, () => {

})