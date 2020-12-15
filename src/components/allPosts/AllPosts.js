import React, {Component} from 'react';
import Post from "../post/Post";
import {withRouter} from "react-router-dom";
import doFetch from "../services/doFetch";
import Loading from "../services/Loading";

class AllPosts extends Component {
  state = {posts: false}
  componentDidMount() {
    const {match: {url}} = this.props

    setTimeout(() => {
      doFetch(url).then(posts => this.setState({posts}))
    }, 500)
  }

  render() {
   const {posts} = this.state;
        return (
            posts ? <div>{posts.map(value => <Post post={value} key={value.id}/>)}</div> : Loading()
        );
  }
}

export default withRouter(AllPosts);
