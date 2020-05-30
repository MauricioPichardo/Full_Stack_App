import React  from 'react';
import { Link } from 'react-router-dom';


class UserSignOut extends React.Component {
  state = {

  }

  componentDidMount() {

  }


  render() {

   const leaveIt=(this.props.props.actions.signOut);
    return <Link to='/' onClick={leaveIt}>Log Out</Link>;
  }


}
export default UserSignOut
