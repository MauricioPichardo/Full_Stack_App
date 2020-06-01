import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header';
import NotFound from './components/NotFound';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Authenticated from './components/Authenticated';
import UserSignOut from './components/UserSignOut';
import withContext from './Context/index.js';
import PrivateRoute from './PrivateRoute';
import Home from  './components/Home';
import UpdateCourse from './components/UpdateCourse';
import NewCourseDetail from './components/NewCourseDetail';
import CourseDetail from './components/CourseDetail';
const HeaderWithContext = withContext(Header);
const AuthWithContext = withContext(Authenticated);
const SignUpWithContext = withContext(SignUp);
const LogInWithContext = withContext(LogIn);
const UserSignOutWithContext = withContext(UserSignOut);
const HomeWithContext = withContext(Home);
const NewCourseDetailWithContext = withContext(NewCourseDetail);
const CourseDetailWithContext = withContext(CourseDetail);
const UpdateCourseWithContext = withContext(UpdateCourse);

export default () => (
  <Router>
    <div>
      <HeaderWithContext />
      <Switch>
      <Route exact path="/" component={HomeWithContext} />
      <PrivateRoute path="/authenticated" component={AuthWithContext} />
      <Route path="/login" component={LogInWithContext} />
      <Route path="/signup" component={SignUpWithContext} />
      <Route path="/logout" component={UserSignOutWithContext} />
      <Route exact path="/" component={HomeWithContext} />
      <PrivateRoute path="/create_course" component={NewCourseDetailWithContext} />
      <Route exact path="/course/:id" component={CourseDetailWithContext} />
      <PrivateRoute path="/course/:id/update" component={UpdateCourseWithContext} />
      <Route component={NotFound} />

      </Switch>
    </div>
  </Router>
);
