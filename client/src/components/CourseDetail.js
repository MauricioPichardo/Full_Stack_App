import React from 'react';
import '../static/css/global.css';
import { Link } from 'react-router-dom';
import DeleteCourse from './DeleteCourse'
import withContext from '../Context/index.js';
import { withRouter } from "react-router-dom";
const DeleteCourseWithContext = withContext(DeleteCourse);
const WithDelete = withRouter(DeleteCourseWithContext);
const ReactMarkdown = require('react-markdown')

export default class CourseDetail extends React.PureComponent {
  state = {

      course: [],
      user: '',
      authorizedUser: false


  }



  async componentDidMount(){

  const  {context}  = this.props;

  await context.data.getCourse(this.props.match.params.id)
    .then(response => {
      /*checks to make sure authenticated user is available prior to comparing IDs*/
      if (context.authenticatedUser != null) {
        /*compares ID of signed in and user*/
        if (context.authenticatedUser.userId === response.User.id) {

          this.setState({
            authorizedUser: true
          });
        } else {
          this.setState({
            authorizedUser: false
          });
        }
      }
      this.setState({
        course: response,
        user: `${response.User.firstName} ${response.User.lastName}`
      })
    })
  }


  render() {
  const {state: { course, user, authorizedUser}} = this;
  const id= this.props.match.params.id;  //Corrected to ensure abilility to access update component/route



  return (
    <div>
      {/* If comparitor showcasing Edit and delete options if owner of course*/}
    {authorizedUser ?
                <div>
              <React.Fragment>
                    <div className="actions--bar">
                                  <div className="bounds">
                                            <div className="grid-100">
                                          <Link className="button" to={{
                                          pathname:`/course/${id}/update`}}> Update Course</Link>
                                          <WithDelete course={course}/>
                                          <Link className="button button-secondary" to='/'>Return to List</Link></div>
                              </div>

                    </div>
              </React.Fragment>
              </div>
    :
          <div>
            <React.Fragment>
                  <div className="actions--bar">
                                  <div className="bounds">
                                          <div className="grid-100">
                                        <Link className="button button-secondary" to='/'>Return to List</Link></div>
                              </div>

                  </div>
            </React.Fragment>
            </div>
    }




        <div className="bounds course--detail">
                      <div className="grid-66">
                                    <div className="course--header">
                                      <h4 className="course--label">Course</h4>
                                      <h3 className="course--title">{course.title}</h3>
                                      <p>By {user}</p>
                                    </div>
                                    <div className="course--description">
                                        <ReactMarkdown source={course.description} />
                                    </div>
                      </div>


          <div className="grid-25 grid-right">
            <div className="course--stats">
                    <ul className="course--stats--list">

                                <li className="course--stats--list--item">
                                  <h4>Estimated Time</h4>

                                  <ReactMarkdown source={course.estimatedTime}  />
                                </li>
                                <li className="course--stats--list--item">
                                  <h4>Materials Needed</h4>
                                  <ul><ReactMarkdown source={course.materialsNeeded} /></ul>
                                </li>
                    </ul>
            </div>
          </div>

        </div>
        </div>

)}}
