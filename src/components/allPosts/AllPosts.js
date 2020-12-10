import React, {Component} from 'react';
import './AllPosts.css'
import Post from "../post/Post";
import {
  BrowserRouter as Router, Switch, Route, Link, withRouter
} from "react-router-dom";
import doFetch from "../services/doFetch";

class AllPosts extends Component {
  state = {posts: false}
  componentDidMount() {
    const {match:{url}} = this.props

    setTimeout(()=>{
        doFetch(url).then(posts => {
            this.setState({posts})
        })
    },3000)
  }
  myFunc=()=>{
      return (<h1>Loading....</h1>)
  }

  render() {
   const {posts} = this.state;

    if(posts){
        return (
            <div>
                { posts.map(value => <Post post={value} key={value.id}/>)}
            </div>
        );
    }else{
    return  this.myFunc()
    }
  }
}

export default withRouter(AllPosts);
