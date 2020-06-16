import React, {Component}  from 'react';

import CreateCourse from './CreateCourse'

//Component to Initiate Create Course


export default class NewCourseDetail extends Component {
  state = {
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    errors: [],
  }




  render() {
        const { context } = this.props;



    const {
      title,
      description,
      estimatedTime,
      materialsNeeded,
      errors,
    } = this.state;




return(

  <div>
  <CreateCourse
    cancel={this.cancel}
    errors={errors}
    submit={this.submit}
    submitText="Create"
    elements={() => (
      <React.Fragment>
      <div className="grid-66">
        <div className="course--header">
          <h4 className="course--label">Course</h4>
              <input
                id="title"
                name="title"
                type="text"
                value={title}
                onChange={this.change}
                placeholder="Course Title" />
                <p>By {context.authenticatedUser.firstName} {context.authenticatedUser.lastName}</p>
              <textarea
                className=""
                id="description"
                name="description"
                type="text"
                value={description}
                onChange={this.change}
                placeholder="Course title... "/>

                </div>
      </div>
      <div className="grid-25 grid-right">
        <div className="course--stats">
          <ul className="course--stats--list">
            <li className="course--stats--list--item">
                <h4>Estimated Time</h4>
                <input
                  id="time"
                  name="estimatedTime"
                  type="text"
                  value={estimatedTime}
                  onChange={this.change}
                  placeholder="Hours" />
                                    </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                <textarea
                  id="materials"
                  name="materialsNeeded"
                  type="materials"
                  value={materialsNeeded}
                  onChange={this.change}
                  placeholder="materials" />
            </li>
          </ul>
        </div>
      </div>
      </React.Fragment>
    )} />
  </div>
);}



change = (event) => {
  const name = event.target.name;
  const value = event.target.value;

  this.setState(() => {
    return {
      [name]: value
    };
  });


}

submit = () => {

  const { context } = this.props;
  const {emailAddress, userId} = context.authenticatedUser;
  const password = context.userPassword;

  const {
    title,
    description,
    estimatedTime,
    materialsNeeded
  } = this.state;


  // Create course
  const course= {
    title,
    description,
    estimatedTime,
    materialsNeeded,
    userId,
  };


//Will Return Null if Successful//will Return Errors if not
context.data.createCourse(course, {emailAddress, password})
    .then( errors=> {
      if (!errors) {

           console.log('Course created successfully');
           this.props.history.push('/');

         } else  {
          this.setState({ errors });
         }})
         .catch( errors => { // handle rejected promises

          this.setState({ errors });
          console.log(errors);
         });

}

cancel = () => {
 this.props.history.push('/');
}
}
