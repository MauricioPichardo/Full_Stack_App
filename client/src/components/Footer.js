import React from 'react';

import { Link } from 'react-router-dom';
import UserSignOut from './UserSignOut';
import logo from '../static/logos/Logo_only.png'


export default class Footer extends React.PureComponent {
  render() {
    const { context } = this.props;
    const authUser = context.authenticatedUser;
    return (

      <footer class="footer bg-parallax">
          <div class="bg-overlay bg-overlay--p85"></div>
          <div class="container">
              <div class="row">
                  <div class="col-lg-4 col-md-6">
                      <div class="footer-col">
                          <div class="widget m-b-25">
                              <a href="#">
                               <div class="boxsvg">
                                  <img class="clogo" src="logos/main-logos/Receive_ai.svg" alt="Receive Software" />
                               </div>
                              </a>
                          </div>
                          <div class="widget widget-address">
                              <ul>
                                  <li>San Francisco, CA 94158</li>
                                  <li>customersupport@receivesoftware.com</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-2 col-md-6">
                      <div class="footer-col p-l-70 p-md-l-0">
                          <div class="widget widget_pages">
                              <h4 class="widget-title">Link</h4>
                              <ul>
                                <li>
                                    <a href="index.html">About us</a>
                                </li>
                                <li>
                                    <a href="careers.html">Careers</a>
                                </li>

                                <li>
                                    <a href="my-account.html">Your Account</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                      <div class="footer-col p-l-70 p-md-l-0">
                          <h4 class="widget-title">Social</h4>
                          <div class="widget widget_socials">
                              <ul class="list-social list-social-2">

                                    <li class="list-social__item">
                                        <a class="ic-fb" href="https://www.facebook.com/receivesoftware/">
                                            <i class="zmdi zmdi-facebook"></i>
                                        </a>
                                    </li>
                                    <li class="list-social__item">
                                        <a class="ic-twi" href="https://twitter.com/ReceiveSoftware">
                                            <i class="zmdi zmdi-twitter"></i>
                                        </a>
                                    </li>
                                    <li class="list-social__item">
                                        <a class="ic-linkedin" href="https://www.linkedin.com/company/receivesoftware">
                                            <i class="zmdi zmdi-linkedin"></i>
                                        </a>
                                    </li>



                              </ul>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                      <div class="footer-col">
                          <div class="widget widget_text">
                              <h4 class="widget-title">Copyright</h4>
                              <p>© 2020 Receive Software</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>


    );
  }
};
