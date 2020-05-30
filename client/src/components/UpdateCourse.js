import React, {Component}  from 'react';
import '../static/css/global.css';
import CreateCourse from './CreateCourse'

export default class UpdatedCourse extends Component {
  state = {
    course: '',
    user:'',
    id:'',
    errors:[],
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



    const {
      errors,
    } = this.state;




return(

  <div>
  <CreateCourse
    cancel={this.cancel}
    errors={errors}
    submit={this.submit}
    submitText="Update Course"
    elements={() => (
      <React.Fragment>
      <div className="grid-66">
        <div className="course--header">
          <h4 className="course--label">Update Course</h4>
              <input
                id="title"
                name="title"
                type="text"
                value={this.state.value}
                onChange={this.change}
                placeholder={course.title} />
                <p>By </p>
              <textarea
                className=""
                id="description"
                name="description"
                type="text"
                value={this.state.value}
                onChange={this.change}
                placeholder={course.description}/>

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
                  value={this.state.value}
                  onChange={this.change}
                  placeholder={course.estimatedTime} />
                                    </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                <textarea
                  id="materials"
                  name="materialsNeeded"
                  type="materials"
                  value={this.state.value}
                  onChange={this.change}
                  placeholder={course.materialsNeeded} />
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
    materialsNeeded,
    id,
    errors
  } = this.state;


  // Create course
  const course= {
    title,
    description,
    estimatedTime,
    materialsNeeded,
    userId,
    id,
  };

console.log({course});


context.data.updateCourse(course, {emailAddress, password})
    .then( errors=> {
      if (!errors) {

           console.log('Course updated successfully');
           this.props.history.push('/');

         } else  {
          this.setState({ errors });
         }})
         .catch( err => { // handle rejected promises
          this.setState({ errors });
         });

}

cancel = () => {
 this.props.history.push('/');
}
}
