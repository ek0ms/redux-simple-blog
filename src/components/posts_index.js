import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
// import { bindActionCreators } from 'redux'; // We don't need this as connect will just do it for us

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

// Whenever we want to consume anything from application level state, we need to define this function
function mapStateToProps({ posts }) {
  return { posts }
}

//**** THESE ALL DO THE SAME THING ****//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts}, dispatch);
// }
// export default connect(null, mapDispatchToProps)(PostsIndex);

// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
