import React from 'react'
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { fetchWiki } from '../actions';
import _ from 'lodash';
import ItemList from './ItemList';

class Feed extends React.Component {
  render() {
    const {wiki} = this.props;
    const contents = _.map(wiki, (value, key) => {
      return <ItemList key={key} item={value} />;
    })
    return(
      <div style={{ marginTop: '70px' }}>
        <Container fixed>
          {contents}
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { wiki: state.wiki }
};

export default connect(mapStateToProps, fetchWiki)(Feed);