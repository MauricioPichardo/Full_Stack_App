import React from 'react';
import '../static/css/global.css';
import { Link } from 'react-router-dom';
import DeleteCourse from './DeleteCourse'

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
      console.log(response);

      if (context.authenticatedUser != null) {

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
  const {state: { course, id, context, emailAddress, password, user, authorizedUser}} = this;




  return (
    <div>

    {authorizedUser ?
                <div>
              <React.Fragment>
                    <div className="actions--bar">
                                  <div className="bounds">
                                            <div className="grid-100">
                                          <Link className="button" to={{
                                          pathname:`/course/${id}/update`}}> Update Course</Link>
                                          <DeleteCourse  email={emailAddress} id={id} password={password} context={context} />
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
                                  <ul>{course.materialsNeeded}</ul>
                                </li>
                    </ul>
            </div>
          </div>

        </div>
        </div>

)}}
