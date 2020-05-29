import React, {Component} from 'react';
import '../static/css/global.css';



class UpdateCourse extends Component {


render() {

          return (
            <div>
              <form>
                <div class="grid-66">
                  <div class="course--header">
                    <h4 class="course--label">Course</h4>
                    <div><input id="title" name="title" type="text" class="input-title course--title--input" placeholder="Course title..."
                        value="Build a Basic Bookcase"></input></div>
                    <p>By Joe Smith</p>
                  </div>
                  <div class="course--description">
                    <div><textarea id="description" name="description" class="" placeholder="Course description...">
                    High-end furniture projects are great to dream about. But unless you have a well-equipped shop and
                    some serious woodworking experience to draw on, it can be difficult to turn the dream into a reality.
                    x 48 in. tall. While the depth of the case is directly tied to the 1 x 10 stock, you can vary the height,
                    width and shelf spacing to suit your needs. Keep in mind, though, that extending the width of the cabinet
                    may require the addition of central shelf supports.</textarea></div>
                  </div>
                </div>
                <div class="grid-25 grid-right">
                  <div class="course--stats">
                    <ul class="course--stats--list">
                      <li class="course--stats--list--item">
                        <h4>Estimated Time</h4>
                        <div><input id="estimatedTime" name="estimatedTime" type="text" class="course--time--input"
                            placeholder="Hours" value="14 hours"></input></div>
                      </li>
                      <li class="course--stats--list--item">
                        <h4>Materials Needed</h4>
                        <div><textarea id="materialsNeeded" name="materialsNeeded" class="" placeholder="List materials...">* 1/2 x 3/4 inch parting strip
                        * 1 x 2 common pine, * 1 x 4 common pine

            </textarea></div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="grid-100 pad-bottom"><button class="button" type="submit">Update Course</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='course-detail.html';">Cancel</button></div>
              </form>
            </div>
  );
}}


export default UpdateCourse;
