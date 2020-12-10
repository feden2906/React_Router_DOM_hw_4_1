import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Comment extends Component {
  render() {
    const {comment:{id, name, email, body}, match:{url}} = this.props
    return (
        <div>
          <h4 className='inline'>{id} - {name}</h4> <Link to={`${url}/${id}`}> <button>Детальніше</button> </Link>
        </div>
    );
  }
}

export default withRouter(Comment);