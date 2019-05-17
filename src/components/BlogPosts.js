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
				<div key={i}>
					<h2>{post.slug}</h2>
					<p dangerouslySetInnerHTML={{__html: post.meta._et_pb_old_content}}/>
				</div>
			)
		});

		return (
			<div>
				<h1>My Posts</h1>
   				{postList}
			</div>
		)

		
	}


}

export default BlogPosts