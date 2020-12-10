import React, {Component} from 'react';
import Comment from "../Comment/Comment";

class AllComments extends Component {
  render() {
    const {comments} = this.props
    return (
        <div>
          {comments.map(value => <Comment comment={value} key={value.id}/>)}
        </div>
    );
  }
}

export default AllComments;