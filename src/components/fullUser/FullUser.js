import React, {Component} from 'react';
import {UserServices} from "../services/UserServices";

class FullUser extends Component {
  state = {user: ''}

  UserServices = new UserServices()

  async componentDidMount() {
    const {id} = this.props
    const user = await this.UserServices.getUser(id)
    this.setState({user})
  }

  render() {
    let {user} = this.state
  //   user:{name, username, email, phone, website,
  //       address: {street, suite, city, zipcode, geo: {lat, lng}},
  //     company: {name: companyName, catchPhrase, bs}}
  // } = this.state
    return (

        <div>
          {user && <div>
                      <h4>{user.name}</h4>
                      <h4>{user.username}</h4>
                      <h4>{user.email}</h4>
                      <h4>{user.address.street}</h4>
                      <h4>{user.address.suite}</h4>
                      <h4>{user.address.city}</h4>
                      <h4>{user.address.zipcode}</h4>
                      <h4>{user.address.geo.lat}</h4>
                      <h4>{user.address.geo.lng}</h4>
                      <h4>{user.phone}</h4>
                      <h4>{user.company.website}</h4>
                      <h4>{user.company.companyName}</h4>
                      <h4>{user.company.catchPhrase}</h4>
                      <h4>{user.company.bs}</h4>
          </div>}
        </div>
    );
  }
}

export default FullUser;