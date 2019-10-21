import React from 'react'
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';
import { fetchWiki } from '../actions';
import _ from 'lodash';

import FeedList from './FeedList';


class Feed extends React.Component {
  render() {
    const {wiki} = this.props;
    console.log(wiki)
    const contents = _.map(wiki, (value, key) => {
      return <FeedList key={key} item={value} />;
    })


    return(
      <div style={{ marginTop: '120px' }}>
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12} sm={8}>
              {contents}
            </Grid>
            <Grid item xs={12} sm={4}>
              <div style={{ textAlign: "center" }}> 
                <CircularProgress color="secondary" /><br />
                <Typography variant="caption" color="secondary">
                  In Development Mode
                </Typography>
              </div>
           
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