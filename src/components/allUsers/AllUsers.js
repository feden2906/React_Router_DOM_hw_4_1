import React, {Component} from 'react';
import './AllUsers.css'
import User from "../User/User";
import {Route, withRouter} from "react-router-dom";
import FullUser from "../fullUser/FullUser";
import doFetch from  './../services/doFetch'

class AllUsers extends Component {
    state = {users: false}
    componentDidMount() {
        const {match:{url}} = this.props

        doFetch(url).then(users => {
            this.setState({users})
        })
    }

    render() {
    const {match:{url}} = this.props
        const {users} = this.state;
    return (
        <div>
          {users && users.map(value => <User user={value} key={value.id}/>)}
          <hr/>

            <Route path={url+ '/:id'} render={(props => {
              const {match:{params:{id}}} = props;
              return <FullUser id={id} key={id}/>
            })}/>

        </div>
    );
  }
}

export default withRouter(AllUsers);
