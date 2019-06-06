const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tag: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean,
    price: Number
})

const Courses = mongoose.model('courses',CourseSchema);
module.exports = Courses;