import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
  return (
    <div className='header'>
      <Link to='/work' className='headerText'>Work</Link>
      <Link to='/about' className='headerText'>About</Link>
    </div>
  )
}

export default Header
