import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class ListItem extends Component {
  render() {
    const { item } = this.props;
    return (
    

        <Paper style={{ padding: '20px 30px', marginBottom: '20px' }}>
            <Typography variant="h5" component="h3">
            {item.title}
            </Typography>
            <Typography component="p">
            {item.content}
            </Typography>
        </Paper>
   
    );
  }
}

export default ListItem;