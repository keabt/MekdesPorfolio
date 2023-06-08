import React from 'react';
import './EmailForm.css'

const EmailForm = () => {
  return (
    <div className='form'>
    <form>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Enter your email"
      />
      <button>Send</button>
    </form>
    </div>
  );
};

export default EmailForm;
