import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    // this.props.match.params.id; Provided by 'react-router' Match is top level property.
   //  Params property that is inside of it is an object that
  //  lists all the wildcard tokens that exist inside the URL
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) { // First argument is the application
  //state, second argument is called ownProps by convention. Is the props objected that is
  //headed, or going to this component. Basically this.props === ownProps;
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
