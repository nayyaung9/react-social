import React from 'react';
import Container from '@material-ui/core/Container';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

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
            {/* <TextField
              id="outlined-email-input"
              label="Title"
              type="text"
              name="title"
              autoComplete="off"
              margin="normal"
              variant="outlined"
              fullWidth={true}
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            /> */}
            <input type="text"      
            value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}/>
            <input type="text" 
             value={this.state.content}
             onChange={(e) => this.setState({ content: e.target.value })} />
            {/* <TextField
              id="outlined-password-input"
              label="Body Content"
              type="text"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              fullWidth={true}
              value={this.state.content}
              onChange={(e) => this.setState({ content: e.target.value })}
            /> */}
            {/* <Button variant="outlined" color="primary">Submit</Button> */}
            <button>submit</button>
          </form>
        </Container>
      </div>
    )
  }
}

export default connect(null, actions)(Create);