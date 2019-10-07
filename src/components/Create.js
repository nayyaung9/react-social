import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Create extends React.Component {
  render() {
    return (
      <div style={{ marginTop: '70px' }}>
        <Container fixed>
          <form>
            <TextField
              id="outlined-email-input"
              label="Title"
              type="text"
              name="title"
              autoComplete="off"
              margin="normal"
              variant="outlined"
              fullWidth={true}
            />
            <TextField
              id="outlined-password-input"
              label="Body Content"
              type="text"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              fullWidth={true}
            />
            <Button variant="outlined" color="primary">Submit</Button>
          </form>
        </Container>
      </div>
    )
  }
}

export default Create;