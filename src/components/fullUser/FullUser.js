import React, {Component} from 'react';
import Loading from "../services/Loading";
import {withRouter} from "react-router-dom";
import doFetch from "../services/doFetch";

class FullUser extends Component {
  state = {user: ''}

  componentDidMount() {
    const {id, match:{url, params}} = this.props
    console.log(params)
    doFetch(url + '/'+ params.id)
        .then(value => console.log(value))
        .then(value => this.setState({user: value}))
        .then(value => console.log(value) )
  }

  render() {
    const {user} = this.state
    if (user) {

      const {user: {name, username, email}} = this.state
          // phone, website,
          // address: {street, suite, city, zipcode, geo: {lat, lng}},
          // company: {name: companyName, catchPhrase, bs}


      return (
          <div>
            <h4>{name}</h4>
            <h4>{username}</h4>
            <h4>{email}</h4>
            {/*<h4>{street}</h4>*/}
            {/*<h4>{suite}</h4>*/}
            {/*<h4>{city}</h4>*/}
            {/*<h4>{zipcode}</h4>*/}
            {/*<h4>{lat}</h4>*/}
            {/*<h4>{lng}</h4>*/}
            {/*<h4>{phone}</h4>*/}
            {/*<h4>{website}</h4>*/}
            {/*<h4>{companyName}</h4>*/}
            {/*<h4>{catchPhrase}</h4>*/}
            {/*<h4>{bs}</h4>*/}
          </div>
      )
    } else {
      return (
          Loading()
      );
    }

  }
}

export default withRouter(FullUser);