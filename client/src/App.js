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
import LogOut from './components/LogOut';
import withContext from './Context/index.js';
import PrivateRoute from './PrivateRoute';
import Home from  './components/Home';
import NewCourseDetail from './components/NewCourseDetail';

const HeaderWithContext = withContext(Header);
const AuthWithContext = withContext(Authenticated);
const SignUpWithContext = withContext(SignUp);
const LogInWithContext = withContext(LogIn);
const LogOutWithContext = withContext(LogOut);
const HomeWithContext = withContext(Home);
const NewCourseDetailWithContext = withContext(NewCourseDetail);
export default () => (
  <Router>
    <div>
      <HeaderWithContext />

      <Switch>
        <Route exact path="/" component={HomeWithContext} />

        <PrivateRoute path="/authenticated" component={AuthWithContext} />
        <PrivateRoute path="/create_course" component={NewCourseDetailWithContext} />
        <Route path="/login" component={LogInWithContext} />
        <Route path="/signup" component={SignUpWithContext} />
        <Route path="/logout" component={LogOutWithContext} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);
