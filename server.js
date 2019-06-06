const mongoose = require("mongoose");
// const courses = require("./model/courses");

const fakeCourse = require('./model/fakecourse');

mongoose
  .connect("mongodb://localhost:27017/data", { useNewUrlParser: true })
  .then(res => console.log("connect successfully"))
  .catch(err => console.log(err));

// newCourse = new courses({
//   name: "Minh",
//   age: 26
// });

// newCourse.save()
// 	.then(course => console.log(course));

fake = new fakeCourse({
	name: "Nhat Minh"
})

fake.save()
	.then(res => console.log(res))
	.catch(err => console.log(err));