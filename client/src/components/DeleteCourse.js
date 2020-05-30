import React  from 'react';



class DeleteCourse extends React.Component {


state = {
  email:'',
  id:'',
  password:'',
  errors:[]
}





render(){
  const {context}=this.props;
  const emailAddress=this.props.email;
  const id=this.props.id;
  const password=this.props.password;
  const { errors
  } = this.state;


  return (
          <button className="button" onClick={deleteThis}>Delete Course</button>

  )


  function deleteThis() {
  context.data.deleteCourse(id, {emailAddress,password})
        .then( errors=> {
          if (!errors) {
               console.log('Course deleted');
                    this.props.history.push('/');
             } else  {
              this.setState({ errors });
             }})
             .catch( err => { // handle rejected promises
              console.log(errors);
             });
       }
}



}

export default DeleteCourse
