import React from 'react';
import '../static/css/global.css';
import { Link } from 'react-router-dom';
import UserSignOut from './UserSignOut';


export default class Header extends React.PureComponent {
  render() {
    const { context } = this.props;
    const authUser = context.authenticatedUser;
    return (
      <div className="header">
        <div className="bounds">
          <Link to="/"><h1 className="header--logo">Courses</h1></Link>
          <nav>
            {authUser ?
              <React.Fragment>
                <span>Welcome, {authUser.firstName}!</span>
                <UserSignOut props={context} />
              </React.Fragment>
            :
              <React.Fragment>
                <Link className="signup" to="/signup">Sign Up</Link>
                <Link className="signin" to="/login">Sign In</Link>
              </React.Fragment>
            }
          </nav>
        </div>
      </div>
    );
  }
};
