import React, {Component} from 'react';

import {NavLink} from "react-router-dom";

class Header extends Component {

  render() {
    return (
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
          <hr/>
        </div>
    );
  }
}

export default Header;
