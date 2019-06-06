const mongoose = require('mongoose');
const courses = require('./model/couses');

mongoose.connect('mongodb://localhost:27017/courses', { useNewUrlParser: true })
    .then(res => console.log('connect successfully'))
    .catch(err => console.log(err));