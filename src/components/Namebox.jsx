import React from 'react';

const Namebox = ({handleChange, addName}) => 
  [<input key='a' type='text' placeholder='Enter Name' onChange = {handleChange}/>,
  <button key='b' type='submit' onClick={addName}>Enter</button>]



export default Namebox
