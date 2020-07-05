import React from 'react';
import './Form.style.css'

const Form = ({ input, email, name, password, submit }) => {
  return (
    <div>
      <form onSubmit={submit}>
        <input type='text' name='name' value={name} onChange={input} />
        <input type='email' name='email' value={email} onChange={input} />
        <input
          type='password'
          name='password'
          value={password}
          onChange={input}
        />
        <button>SIGN IN</button>
      </form>
    </div>
  );
};

export default Form;
