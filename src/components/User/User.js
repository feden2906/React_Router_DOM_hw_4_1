import React, {Component} from 'react';
import './User.css'
import {Link, withRouter} from "react-router-dom";

class User extends Component {
  render() {
    const {user: {id, name}, match:{url}} = this.props
    return (
        <div>
          <h3 className='inline'>{name}</h3> <Link to={`${url}/${id}`}> <button>Детальніше</button> </Link>
        </div>
    );
  }
}

export default withRouter(User);
