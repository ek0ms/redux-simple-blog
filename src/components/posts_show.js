import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    // this.props.match.params.id; Provided by 'react-router' Match is top level property.
   //  Params property that is inside of it is an object that
  //  lists all the wildcard tokens that exist inside the URL

    // if (!this.props.post) {
    //   const { id } = this.props.match.params;
    //   this.props.fetchPost(id)
    // }
    // If network requests is a big issue, we can make sure that we only fetch new data if
    // there isn't a post already (like when directly navigating to the show page).
    // This is basically so we don't fetch data twice when user starts at index (all posts are fetched),
    // and then navigate to individual show page. Since we already fetched all data in index, we just
    // have to set the route and don't have to refetch the post data. But to keep data fresh, it is okay
    // to refetch data.

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
        <Link to="/">Back to Index</Link>
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
