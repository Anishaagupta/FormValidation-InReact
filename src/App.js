import React from 'react';
import './App.css';
import Form from './components/Form.jsx';
import validator from 'validator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // this.setState({ name: event.target.value });
    // this.setState({ email: event.target.value });
    // this.setState({ password: event.target.value });
  };

  handleButtonClick = event => {
    event.preventDefault();
    const { name, email, password } = this.state;
    if (!(name === '' && email === '' && password === '')) {
      if (name.length > 3 && name.length < 20) {
        if (password.length > 6 && password.length < 30) {
          if (validator.isAlpha(name)) {
            if (validator.isEmail(email)) {
              alert('Form Is Submitted Successfully.');
            } else {
              alert('Provide correct Email.');
            }
          } else {
            alert('Provide correct name.');
          }
        } else {
          alert(
            "Password can't be less than 6 and more than 30 character long."
          );
        }
      } else {
        alert("Name can't be less than 3 and more than 20 letters.");
      }
    } else {
      alert('First fill out the details.');
    }
  };
  render() {
    return (
      <div>
        <Form
          name={this.state.name}
          email={this.state.email}
          password={this.state.password}
          submit={this.handleButtonClick}
          input={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
