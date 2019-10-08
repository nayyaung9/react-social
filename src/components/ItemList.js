import React, {Component} from 'react';
import {connect} from 'react-redux';

class ListItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div key="toDoName" className="col s10 offset-s1 to-do-list-item black">
        <h4>
          {item.title}
          <span 
            className="complete-todo-item waves-effect waves-light blue lighten-5 blue-text text-darken-4 btn"
          >
          </span>
        </h4>
      </div>
    );
  }
}

export default connect(null)(ListItem);