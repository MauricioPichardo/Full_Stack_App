import React from 'react';
import '../static/css/global.css';



const CourseDetail =() => {
  return (
  <div>
    <div class="actions--bar">
      <div class="bounds">
        <div class="grid-100"><span><a class="button" href="update-course.html">Update Course</a><a class="button" href="#">Delete Course</a></span><a
            class="button button-secondary" href="index.html">Return to List</a></div>
      </div>
    </div>
    <div class="bounds course--detail">
      <div class="grid-66">
        <div class="course--header">
          <h4 class="course--label">Course</h4>
          <h3 class="course--title">Build a Basic Bookcase</h3>
          <p>By Joe Smith</p>
        </div>
        <div class="course--description">
          <p>High-end furniture projects are great to dream about. But unless you have a well-equipped shop and some serious woodworking experience to draw on, it can be difficult to turn the dream into a reality.</p>
        </div>
      </div>
      <div class="grid-25 grid-right">
        <div class="course--stats">
          <ul class="course--stats--list">
            <li class="course--stats--list--item">
              <h4>Estimated Time</h4>
              <h3>14 hours</h3>
            </li>
            <li class="course--stats--list--item">
              <h4>Materials Needed</h4>
              <ul>
                <li>1/2 x 3/4 inch parting strip</li>
                <li>Minwax Oil Based Polyurethane</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)};



export default CourseDetail;
