import React, {Component} from 'react';
import './Header.css'

import {UserServices} from "../services/UserServices";
import {PostServices} from "../services/PostServices";
import {PhotoServices} from "../services/PhotoServices";
import {CommentServices} from "../services/CommentServices";
import AllUsers from "../allUsers/AllUsers";
import AllPosts from "../allPosts/AllPosts";
import AllPhotos from "../AllPhotos/AllPhotos";
import AllComments from "../AllComments/AllComments";

import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";



class Header extends Component {
  UserServices = new UserServices()
  PostServices = new PostServices()
  PhotoServices = new PhotoServices()
  CommentServices = new CommentServices()

  state = {users: [], posts: [], photos: [], comments: []}

  async componentDidMount() {
    let users = await this.UserServices.getAllUsers()
    let posts = await this.PostServices.getAllPosts()
    let photos = await this.PhotoServices.getAllPhotos()
    let comments = await this.CommentServices.getAllComments()
    this.setState({users, posts, photos, comments})
  }

  render() {
    const {users, posts, photos, comments} = this.state
    return (
        <div>
          <div>
            <div>
              <NavLink to={'/users'}>Користувачі</NavLink>
            </div>
            <div>
              <NavLink to={'/posts'}>Пости</NavLink>
            </div>
            <div>
              <NavLink to={'/photos'}>Фото</NavLink>
            </div>
            <div>
              <NavLink to={'/comments'}>Коменти</NavLink>
            </div>
          </div>
          <hr/>

          <Switch>
            <Route path={'/users'} component={AllUsers}/>
            <Route path={'/posts'} component={AllPosts}/>
            <Route path={'/photos'} render={() => <AllPhotos photos={photos}/>}/>
            <Route path={'/comments'} render={() => <AllComments comments={comments}/>}/>
          </Switch>
        </div>
    );
  }
}

export default Header;
