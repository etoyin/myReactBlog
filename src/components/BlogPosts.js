//import React from 'react';
import React, {Component} from 'react';
//import {getData} from './GetData'

class BlogPosts extends React.Component {
 	constructor(props) {
    	super(props);
    	this.state = {
      		posts: []
    	}
  	}

  
  	componentDidMount() {
	  	let dataUrl = 'http://epower.ng/wp-json/wp/v2/posts';
	  	fetch(dataUrl)
	    	.then(res => res.json())
	    	.then(res => {
	        	this.setState({
	           		posts: res	
	        	})
	    	})
	}

	render(){
		let postList = this.state.posts.map((post, i) => {
			return (
				<div className="exceptImage" key={i}>
					<img src={post.featured_image}/>
					<p dangerouslySetInnerHTML={{__html: post.slug}}/>
					
				</div>
			)
		});

		return (
			<div className="container">
				<h1>My Posts</h1>
				<div className="flexcontainer">
					{postList}
				</div>				
			</div>
		)

		
	}


}

export default BlogPosts