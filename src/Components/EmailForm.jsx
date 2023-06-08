import React from 'react';
import './EmailForm.css'

const EmailForm = () => {
  const handleClick = (event) => {
    event.preventDefault();
    // Handle the button click logic here
  };



  return (
    <div className='form'>
    <form>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Enter your email"
      />
      <button onClick={handleClick}>Send</button>
    </form>
    </div>
  );
};

export default EmailForm;
