import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
// Styles
import '../style.css';

class ListItem extends Component {
  render() {
    const { item } = this.props;
    return (
    

        <div style={{ marginBottom: '60px', border: '1px solid #e6e6e6', borderRadius: '3px' }} className="article_post">
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
        
           
        </div>
   
    );
  }
}

export default ListItem;