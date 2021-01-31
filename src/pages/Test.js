import React from 'react';
import CustomButton from '../components/custom-button/CustomButton';
import FormInput from '../components/form/FormInput';

class TestPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    const { username } = this.state;
  }
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="username"
            type="text"
            value={this.state.username}
            label="Username"
            required
          />
          <div>
            <CustomButton type='submit'>Sign in</CustomButton>
          </div>
        </form>
      </div>
    );

  }
};

export default TestPage;
