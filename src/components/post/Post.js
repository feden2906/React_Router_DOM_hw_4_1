import React, {Component} from 'react';
import './Post.css'
import {Link, Route, Switch, withRouter} from "react-router-dom";

class Post extends Component {
  render() {
    const {post: {id, title, body}, match: {url}} = this.props
    return (
        <div>
          {id} - {title} <Link to={`${url}/${id}`}>
          <button>Детальныше</button>
        </Link>
          <Switch>
            <Route path={`${url}/${id}`} render={() => <h4>{body}</h4>}/>
          </Switch>
        </div>
    );
  }
}

export default withRouter(Post);