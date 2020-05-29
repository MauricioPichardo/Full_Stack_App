import React from 'react';
import '../static/css/global.css';
import { Link } from 'react-router-dom';
import Delete from './Delete'

export default class CourseDetail extends React.PureComponent {
  state = {
    course: '',
    user:'',
    id:'',
  }



  componentDidMount(){
  const { context } = this.props;
  const id = this.props.match.params.id
  context.data.getCourse(id)
      .then( course=> {
            if (!course) {
                 console.log('failed to return existing courses');
               } else  {
                this.setState({ course, id});
               }})
               .catch( err => { // handle rejected promises
                 console.log(err);
                 this.props.history.push('/error'); // push to history stack
               });


  }

  render() {
  const {state: { course }} = this;
  const {state: { id}} = this;


  return (


  <div>
        <div className="actions--bar">
                <div className="bounds">
                        <div className="grid-100"><span>
                        <Link className="button" to={{pathname: `/courses/${id}`}} >Update Course</Link>
                        <Delete />
                        </span>
                </div></div>
              </div>
              <div className="bounds course--detail">
                <div className="grid-66">
                  <div className="course--header">
                    <h4 className="course--label">Course</h4>
                    <h3 className="course--title">{course.title}</h3>
                    <p>By {course.firsName} {course.lastName}</p>
                  </div>
                  <div className="course--description">
                  <p>  {course.description}</p>
                  </div>
                </div>
                <div className="grid-25 grid-right">
                  <div className="course--stats">
                    <ul className="course--stats--list">
                      <li className="course--stats--list--item">
                        <h4>Estimated Time</h4>
                        <h3>{course.estimatedTime}</h3>
                      </li>
                      <li className="course--stats--list--item">
                        <h4>Materials Needed</h4>



                        <ul>
                              {course.materialsNeeded}
                        </ul>
                      </li>
                    </ul>
                  </div>
              </div>
        </div>
  </div>
)}};
