import React, {Component} from 'react';

class Photo extends Component {
  render() {
    const {photo:{title, thumbnailUrl}} = this.props
    return (
          <img src={thumbnailUrl} alt={title}/>
    );
  }
}

export default Photo;