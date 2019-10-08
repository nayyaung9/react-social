import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import * as actions from '../actions/';
import { connect } from 'react-redux';

class Create extends React.Component {
  state = {
    title: '',
    content: ''
  };

  onHandleSubmit = event => {
    event.preventDefault();
    console.log('word?');
    const { addWiki } = this.props;
    addWiki({title: this.state.title, content: this.state.content });
    this.setState({
      title: '',
      content: ''
    })
  }
  render() {
    return (
      <div style={{ marginTop: '70px' }}>
        <Container fixed>
          <form onSubmit={this.onHandleSubmit}>
            <TextField
              id="outlined-email-input"
              label="Title"
              type="text"
              name="title"
              autoComplete="off"
              margin="normal"
              variant="outlined"
              fullWidth={true}
              value={this.state.title}
              defaultValue={this.state.title}
              onChange={event => {
                const { value } = event.target;
                this.setState({ title: value });
              }}
              required
            />
            <TextField
              id="outlined-password-input"
              label="Body Content"
              type="text"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              fullWidth={true}
              value={this.state.content}
              defaultValue={this.state.content}
              onChange={event => {
                const { value } = event.target;
                this.setState({ content: value });
              }}
              required
            />
            <Button type="submit" variant="outlined" color="primary">Submit</Button>
          </form>
        </Container>
      </div>
    )
  }
}

export default connect(null, actions)(Create);