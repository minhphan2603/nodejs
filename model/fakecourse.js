const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const fakeCourses = mongoose.model('courses',CourseSchema);
module.exports = fakeCourses;