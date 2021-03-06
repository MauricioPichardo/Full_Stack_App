import React from 'react';

import NewCourse from './NewCourse';
import { Link } from 'react-router-dom';


export default class Careers extends React.PureComponent {
  state = {
    courses: []
  }


  componentDidMount(){
  const { context } = this.props;

  context.data.getCourses()
      .then( courses=> {
            if (!courses) {
                 console.log('failed to return existing courses');
               } else  {
                this.setState({ courses });
               }})
               .catch( err => { // handle rejected promises
                 console.log(err);
                 this.props.history.push('/error'); // push to history stack
               });
  }




  render() {
  const {state: { courses }} = this;


    return (
      <div>
    <div className="bounds" >
    {courses.map((number) =>
      <div className="grid-33" key={number.id}>
      <Link className="course--module course--link"   to={{
    pathname: `/course/${number.id}`}}>
      <h4 className="course--label">Role</h4>
      <h3 className="course--title">{number.title}</h3>
        </Link></div>
    )}

  
    </div>

    </div>
    )
  }
}
