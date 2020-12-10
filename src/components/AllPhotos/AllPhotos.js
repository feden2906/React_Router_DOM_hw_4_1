import React, {Component} from 'react';
import Photo from "../Photo/Photo";

class AllPhotos extends Component {
  render() {
    const {photos} = this.props
    return (
        <div>
          {photos.map(value => <Photo photo={value} key={value.id}/>)}
        </div>
    );
  }
}

export default AllPhotos;