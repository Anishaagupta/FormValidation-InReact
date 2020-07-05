import React from 'react';
import './Form.style.css';

const Form = ({ input, email, name, password, submit }) => {
  return (
    <div>
      <form onSubmit={submit}>
        <input
          placeholder='Enter your name'
          type='text'
          name='name'
          value={name}
          onChange={input}
        />
        <input
          placeholder='Enter your email'
          type='email'
          name='email'
          value={email}
          onChange={input}
        />
        <input
          placeholder='Enter your password'
          type='password'
          name='password'
          value={password}
          onChange={input}
        />
        <button>SIGN UP</button>
      </form>
    </div>
  );
};

export default Form;
