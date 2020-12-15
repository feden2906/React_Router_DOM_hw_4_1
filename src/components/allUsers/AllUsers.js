import React, {Component} from 'react';
import User from "../User/User";
import {Route, withRouter} from "react-router-dom";
import FullUser from "../fullUser/FullUser";
import doFetch from './../services/doFetch'
import Loading from "../services/Loading";

class AllUsers extends Component {
  state = {users: false, url: ''}

  componentDidMount() {
    const {match: {url}} = this.props
    setTimeout(() => {
      doFetch(url).then(users => this.setState({users, url}))
    }, 1000)
  }

  render() {
    const {users, url} = this.state;
    if (users) {
      return (
          <div>
            {users.map(value => <User user={value} key={value.id}/>)}
            <hr/>
            <Route path={url + '/:id'}   render={(props => {
              const {match: {params: {id}}} = props;
              return <FullUser id={id} key={id}/>
            })}/>
          </div>
      )
    } else {
      return (
          Loading()
      )
    }
  }
}

export default withRouter(AllUsers);
