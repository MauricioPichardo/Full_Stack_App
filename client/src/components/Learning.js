import React from 'react';

import NewCourse from './NewCourse';
import { Link } from 'react-router-dom';


export default class Learning extends React.PureComponent {
  state = {
    courses: []
  }





  render() {
  const {state: { courses }} = this;


    return (
     <div>
    
     <div class="col-md-8 col-lg-9">
         <article>
            <div className="article">
                 <a href="blog-grid.html">
                     <img src="images/blog-01.jpg" alt="the  villa overlooks dramatic mountainous scenery" />
                 </a>
             <div class="entry-summary">
                 <h4 class="entry-title">
                     <Link to="/Collections101">Collections 101</Link>
                 </h4>
                 <span class="entry-meta"> June, 30, 2020</span>
                 <p class="entry-excerpt">The basics of collections and the basics on how to do it.
                  </p>
             </div>
             </div>
         </article>
    </div>
    </div>
    )
  }
}
