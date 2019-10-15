import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class ListItem extends Component {
  render() {
    const { item } = this.props;
    return (
    

        <Paper style={{ marginBottom: '20px' }}>
          <div style={{ padding: '20px 30px'}}>
          <Typography variant="h5" component="h3">
            {item.title} 
            </Typography>
          </div>
          
            <img src={`${item.photo}`} alt={`${item.title}`} width="100%"/>
            <div style={{ padding: '20px 30px'}}>
              <Typography component="p">
                {item.content}
              </Typography>
            </div>
        
           
        </Paper>
   
    );
  }
}

export default ListItem;