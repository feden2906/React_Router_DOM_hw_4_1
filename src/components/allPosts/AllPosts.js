import React, {Component} from 'react';
import './AllPosts.css'
import Post from "../post/Post";
import {
  BrowserRouter as Router, Switch, Route, Link, withRouter
} from "react-router-dom";

class AllPosts extends Component {

  render() {
    const {posts, match:{url}} = this.props
    return (
        <div>
          {posts.map(value => <Post post={value} key={value.id}/>)}
          {/*<Switch>*/}
          {/*  <Route path={url + '/:id'} render={() => 'sfffjf'}/>*/}
          {/*</Switch>*/}
        </div>
    );
  }
}

export default withRouter(AllPosts);