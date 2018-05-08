import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(List);
