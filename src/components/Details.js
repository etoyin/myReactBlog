import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      handle: ''
    }

  }

  componentDidMount(){
    const {handle} = this.props.match.params;
    let dataUrl = 'http://epower.ng/wp-json/wp/v2/posts';
    fetch(dataUrl)
      .then(res => res.json())
      .then(res => {
          this.setState({
              posts: res,
              handle: handle
          })
      })
  }


  render(){
    let postList = this.state.posts.filter((post, i)=>{
      return post.slug == this.state.handle;
    })

    return (
      <div className="container">
				<h1>My Posts</h1>
				<div className="flexcontainer">
          <div className="exceptImage">
            <img src={postList.featured_image}/>
            <p dangerouslySetInnerHTML={{__html: postList.slug}}/>
        </div>
				</div>
      </div>
    )
  }
}


export default Details;
