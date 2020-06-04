import React, {Component}  from 'react';
import '../static/css/global.css';
import UpCourse from './UpCourse'

export default class UpdatedCourse extends Component {
  state = {
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    course:'',
    id: '',
    errors: [],
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


    const {
      errors,
    } = this.state;


return(

  <div>
  <UpCourse
    cancel={this.cancel}
    errors={errors}
    submit={this.submit}
    submitText="Update Course"
    elements={() => (
      <React.Fragment>
      <div className="grid-66">
        <div className="course--header">
          <h4 className="course--label">Course Title</h4>
              <input
                id="title"
                name="title"
                type="text"
                value={this.state.value}
                onChange={this.change} />
              <textarea
                className=""
                id="description"
                name="description"
                type="text"
                value={this.state.value}
                onChange={this.change}/>

                </div>
      </div>
      <div className="grid-25 grid-right">
        <div className="course--stats">
          <ul className="course--stats--list">
            <li className="course--stats--list--item">
                <h4>Estimated Time</h4>
                <input
                  id="estimatedtime"
                  name="estimatedTime"
                  type="text"
                  value={this.state.value}
                  onChange={this.change}
                  placeholder={this.state.course.estimatedTime} />
                                    </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                <textarea
                  id="materialsNeeded"
                  name="materialsNeeded"
                  type="materials"
                  value={this.state.value}
                  onChange={this.change}
                  placeholder={this.state.course.materialsNeeded}/>
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
  const {emailAddress} = context.authenticatedUser;
  const password = context.userPassword;

  const {
    title,
    description,
    estimatedTime,
    materialsNeeded,
    id
  } = this.state;


  // Create course
  const course= {
    title,
    description,
    estimatedTime,
    materialsNeeded,
    id,
  };



context.data.updateCourse(course, {emailAddress, password})
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
