const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Schema = mongoose.Schema;

const taskSchema = new Schema ({
    text: String,
    isCheck: Boolean
});

const url = 'mongodb+srv://dbUser:dbUserPass@firstcluster.as11g.mongodb.net/<dbUserDB>?retryWrites=true&w=majority'
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const Task = mongoose.model('tasks', taskSchema);

app.get('/', (req,res) => {
    const task = new Task({
        text: 'First task',
        isCheck: false
    })
    task.save().then(result => {
        res.send(result);
    })
    
});

app.get('/paramRequest', (req, res) => {
    Task.find().then(result => {
        res.send({data: result})
    })
})

app.listen(8000, () => {

})