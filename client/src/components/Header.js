import React from 'react';

import { Link } from 'react-router-dom';
import UserSignOut from './UserSignOut';
import logo from '../static/logos/Logo_only.png'
import receiveTitle from '../static/logos/Receive.svg'
import receive from '../static/logos/Receive.jpg'

export default class Header extends React.PureComponent {





  render() {
    const { context } = this.props;
    const authUser = context.authenticatedUser;


    function toggleSubmenu() {
      var contentId = document.getElementById("submenu");
            contentId.style.display === "block" ? contentId.style.display = "none" :
            contentId.style.display = "block";
     var ham = document.getElementById("hambars");
              ham.classList.toggle("change");
          }

          function aboutSubmenu(e){
              e.preventDefault(e);
              console.log(e.target);
              var about = document.getElementById('aboutSub');
              about.style.display === "block" ? about.style.display = "none" :
              about.style.display = "block";
              e.target.classList.toggle("active");
          }

          function aboutLearning(e){
              e.preventDefault(e);
              console.log(e.target);
              var learn = document.getElementById('aboutLearn');
              learn.style.display === "block" ? learn.style.display = "none" :
              learn.style.display = "block";
              e.target.classList.toggle("active");
          }

    return (
      <header id="header">
          <div className="header header-1 d-none d-lg-block js-header-1">
              <div className="header__bar">
                  <div className="wrap wrap--w1790">
                      <div className="container-fluid">
                          <div className="header__content">
                              <div className="title_cointainer">
                                  <Link to='/'>

                                      <img className="clogo" src={logo} alt="Receive Software" />

                                      <img className="ctitle" src={receiveTitle} alt="Receive Software" />


                                  </Link>
                              </div>
                              <div className="header__content-right">
                                  <nav className="header-nav-menu">
                                      <ul className="menu nav-menu">
                                          <li className="menu-item menu-item-has-children">
                                              <Link>About Us</Link>
                                              <ul className="sub-menu" >
                                                  <li className="menu-item">
                                                      <Link to="/platform">Platform</Link>
                                                  </li>
                                                  <li className="menu-item">
                                                      <Link to="/team">Our Team</Link>
                                                  </li>
                                                  <li className="menu-item">
                                                      <Link to="/careers">Careers</Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="menu-item">
                                              <Link to='/login'>
                                              Login
                                              </Link>
                                          </li>

                                          <li className="menu-item menu-item-has-children">
                                              <Link>Learning Center</Link>
                                              <ul className="sub-menu">
                                                  <li className="menu-item">
                                                      <Link to="/learning/Collections101">Collections 101</Link>
                                                  </li>
                                                  <li className="menu-item">
                                                      <Link to="/learning/Compliance">Compliance</Link>
                                                  </li>
                                                  <li className="menu-item">
                                                      <Link to="/learning/latest">Latest Article</Link>
                                                  </li>
                                              </ul>
                                          </li>
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="header-mobile d-block d-lg-none">
              <div className="header-mobile__bar">
                  <div className="container-fluid">
                      <div className="header-mobile__bar-inner">
                        <div className='cmobile'>
                          <Link to='/'>
                              <img className="clogo mobilesmaller" src={logo} alt="Receive Software" />
                              <img className="ctitle" src={receiveTitle} alt="Receive Software" />
                          </Link>
                          </div>
                          <button className="hamburger hamburger--slider float-right" type="button" onClick={toggleSubmenu}>
                              <span className="hamburger-box" id="hamTarget">
                              <div class="container" id='hambars'>
                                        <div class="bar1"></div>
                                        <div class="bar2"></div>
                                        <div class="bar3"></div>
                                        </div>
                              </span>
                          </button>
                      </div>
                  </div>
              </div>
              <nav className="header-nav-menu-mobile" id="submenu">
                  <div className="container-fluid">
                      <ul className="menu nav-menu menu-mobile">
                          <li className="menu-item menu-item-has-children">
                            <Link onClick={aboutSubmenu} >About Us</Link>
                            <ul className="sub-menu" id="aboutSub">
                                <li className="menu-item mobile-dropdown">
                                    <Link to="/platform" className="mobile-dropdown">Platform</Link>
                                </li>
                                <li className="menu-item mobile-dropdown">
                                    <Link to='/careers' className="mobile-dropdown">
                                      Careers
                                    </Link>
                                </li>
                            </ul>
                          </li>
                          <li className="menu-item">
                          <Link to='/login'>
                          Login
                          </Link>
                          </li>
                          <li className="menu-item menu-item-has-children">
                            <Link onClick={aboutLearning}>Learning Center</Link>
                            <ul className="sub-menu" id="aboutLearn">
                                <li className="menu-item mobile-dropdown">
                                    <Link to="/learning/Collections101" className="mobile-dropdown">Collections 101</Link>
                                </li>
                                <li className="menu-item mobile-dropdown">
                                    <Link to="/learning/Compliance" className="mobile-dropdown">Compliance</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/learning/latest" className="mobile-dropdown">Latest Article</Link>
                                </li>
                            </ul>
                          </li>
                      </ul>
                  </div>
              </nav>
          </div>
      </header>
    );
  }
};
