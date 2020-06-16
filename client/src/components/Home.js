import React from 'react';

import NewCourse from './NewCourse';
import { Link } from 'react-router-dom';


export default class Home extends React.PureComponent {
  state = {
    courses: []
  }


  componentDidMount(){
  const { context } = this.props;

}




  render() {
  const {state: { courses }} = this;


    return (
      <div>

    </div>
    )
  }
}
