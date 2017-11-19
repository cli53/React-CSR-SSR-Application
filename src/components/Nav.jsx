import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return  (
     <ul>
       <li>
        <Link exact="true" to='/home'>Home</Link>
       </li>
       <li>
        <Link exact="true" to='/about'>About</Link>
       </li>
     </ul>
  )
}


