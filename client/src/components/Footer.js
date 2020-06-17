import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../static/logos/Logo_only.png'
import receiveTitle from '../static/logos/Receive.svg'
import receive from '../static/logos/Receive.jpg'


export default class Footer extends React.PureComponent {
  render() {
    return (

      <footer class="footer">
      <div className="foot col_1">
        <div className="footTitle">
          <Link to='/'>

              <img className="flogo" src={logo} alt="Receive Software" />

              <img className="ftitle" src={receiveTitle} alt="Receive Software" />


          </Link>
        </div>

      </div>
      <div className="foot col_2">


                                <ul>
                                    <li> <Link to="/">Home</Link></li>
                                    <li> <Link to="/">About Us</Link></li>
                                </ul>


      </div>
      <div className="foot col_3">
                              <h4 class="widget-title">copyright</h4>
                              <p>© 2020 Receive Software</p>
      </div>

      </footer>


    );
  }
};
