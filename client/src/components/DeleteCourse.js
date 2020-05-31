import React  from 'react';

import { withRouter } from "react-router-dom";
class DeleteCourse extends React.Component {


state = {

  password:'',
  errors:[],
  redirect: '/',
}


render(){
  const {context}=this.props;
  const id=this.props.course.id;
  const emailAddress=this.props.context.authenticatedUser.emailAddress;
  const password=this.props.context.userPassword;



  return (
          <button className="button" onClick={deleteThis}>Delete Course</button>

  )



//actional function to kick off destroy
  function deleteThis() {
  context.data.deleteCourse(id, {emailAddress,password})
        .then( errors=> {
          if (!errors) {
            console.log('Successful Deletion');

             } else  {
              this.setState({ errors });
             }})
             .catch( err=> { // handle rejected promises
                console.log(err);
             });
       }




}

}

export default withRouter(DeleteCourse);
