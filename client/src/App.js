import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './static/css/App.css';

import Header from './components/Header';
import Careers from './components/Careers';
import NotFound from './components/NotFound';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Authenticated from './components/Authenticated';
import UserSignOut from './components/UserSignOut';
import withContext from './Context/index.js';
import PrivateRoute from './PrivateRoute';
import Home from  './components/Home';
import UpdateCourse from './components/UpdateCourse';
import Contact from './components/ContactUs';
import NewCourseDetail from './components/NewCourseDetail';
import CourseDetail from './components/CourseDetail';
import Footer from './components/Footer';


const HeaderWithContext = withContext(Header);
const AuthWithContext = withContext(Authenticated);
const SignUpWithContext = withContext(SignUp);
const LogInWithContext = withContext(LogIn);
const UserSignOutWithContext = withContext(UserSignOut);
const HomeWithContext = withContext(Home);
const NewCourseDetailWithContext = withContext(NewCourseDetail);
const CourseDetailWithContext = withContext(CourseDetail);
const UpdateCourseWithContext = withContext(UpdateCourse);
const CareersWithContext = withContext(Careers);
const ContactWithContext = withContext(Contact);
const FooterWithContext = withContext(Footer);

export default () => (
  <Router>
    <div>
      <HeaderWithContext />
      <Switch>
      <Route exact path="/" component={HomeWithContext} />
      <PrivateRoute path="/authenticated" component={AuthWithContext} />
      <Route path path="/careers" component={CareersWithContext} />
      <Route path="/login" component={LogInWithContext} />
      <Route path="/signup" component={SignUpWithContext} />
      <Route path="/logout" component={UserSignOutWithContext} />
      <Route exact path="/" component={HomeWithContext} />
      <Route exact path="/contactus" component={ContactWithContext} />
      <PrivateRoute path="/create_course" component={NewCourseDetailWithContext} />
      <Route exact path="/course/:id" component={CourseDetailWithContext} />
      <Route exact path="/careers" component={ContactWithContext} />
      <PrivateRoute path="/course/:id/update" component={UpdateCourseWithContext} />
      <Route component={NotFound} />
      </Switch>
            <Footer />
    </div>
  </Router>
);
