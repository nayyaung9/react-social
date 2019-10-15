import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { fetchWiki } from '../actions';
import _ from 'lodash';

import ItemList from './ItemList';

class Feed extends React.Component {
  render() {
    const {wiki} = this.props;
    console.log(wiki);
    const contents = _.map(wiki, (value, key) => {
      return <ItemList key={key} item={value} />;
    })
    return(
      <div style={{ marginTop: '70px' }}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              {contents}
            </Grid>
            <Grid item xs={12} sm={4}>
              a
            </Grid>
          </Grid>
        
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { wiki: state.wiki }
};

export default connect(mapStateToProps, fetchWiki)(Feed);