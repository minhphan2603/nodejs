const mongoose = require("mongoose");
const courses = require("./model/courses");

// const fakeCourse = require('./model/fakecourse');

mongoose
  .connect("mongodb://localhost:27017/data", { useNewUrlParser: true })
  .then(res => console.log("connect successfully"))
  .catch(err => console.log(err));

// newCourse = new courses({
//   	name: "FullStack",
//     author: "Minh",
//     tag: ["NodeJS","ReacrJS"],
//     isPublished: true,
//     price: 300
// });

// newCourse.save()
// 	.then(course => console.log(course));

// fake = new fakeCourse({
// 	name: "Nhat Minh"
// })

// fake.save()
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err));

courses.findById('5cf8eae7254cb23a508fd08c')
	.then(course => {
		course.price = 200;
		course.save().then(c => console.log(c))
	});