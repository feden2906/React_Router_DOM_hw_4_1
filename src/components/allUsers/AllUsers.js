import React, {Component} from 'react';
import './AllUsers.css'
import User from "../User/User";
import {Route, Switch, withRouter} from "react-router-dom";
import FullUser from "../fullUser/FullUser";

class AllUsers extends Component {

  render() {
    const {users, match:{url}} = this.props
    return (
        <div>
          {users.map(value => <User user={value} key={value.id}/>)}
          <hr/>
          <Switch>
            <Route path={url+ '/:id'} render={(props => {
              const {match:{params:{id}}} = props;
              return <FullUser id={id} key={id}/>
            })}/>
          </Switch>
        </div>
    );
  }
}

export default withRouter(AllUsers);