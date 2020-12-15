import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import AllUsers from "../allUsers/AllUsers";
import AllPosts from "../allPosts/AllPosts";
import AllPhotos from "../AllPhotos/AllPhotos";
import AllComments from "../AllComments/AllComments";

class Body extends Component {
  render() {
    return (
        <div>
          <Switch>
            <Route path={'/users'} component={AllUsers}/>
            <Route path={'/posts'} component={AllPosts}/>
            <Route path={'/photos'} component={AllPhotos}/>
            <Route path={'/comments'} component={AllComments}/>
          </Switch>
        </div>
    );
  }
}

export default Body;