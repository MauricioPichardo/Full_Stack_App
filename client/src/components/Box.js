
import React from 'react';
import '../static/css/global.css';
import { Link } from 'react-router-dom';

const Box = (props) =>{

    return(

            <div class="grid-33"><Link to={props.id} class="course--module course--link" >
                <h4 class="course--label">Course</h4>
                <h3 class="course--title">{props.title}</h3>
              </Link></div>
    )

};


//Search Based off Route




export default Box;
