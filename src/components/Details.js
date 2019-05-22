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

    let postList = this.state.posts.map((post, i) => {
      if (post.slug === this.state.handle){
        return (
          <div className="details" key={i}>
            <img className="detailsImg" src={post.featured_image}/>
            <br/>
            <div className="paraDiv">
            <p dangerouslySetInnerHTML={{__html: post.meta._et_pb_old_content}}/>
            </div>
            
          </div>
        )
      }
    });
    let header = this.state.handle.split("-").join(" ");

    /*
    let postList = this.state.posts.filter((post)=>{
      return post.slug === this.state.handle;
    });

    return (
      
      <div className="container">
				<h1>{postList.slug}</h1>
				<div className="">
          <div className="">
            <img src="" alt="Hello"/>
            {console.log(this.state.posts.id)}
            {console.log(this.state.handle)}
            {console.log(postList[0])}
            <p dangerouslySetInnerHTML={{__html: postList.slug}}/>
        </div>
				</div>
      </div>
    )*/

    return (
			<div className="container">
				<h1>{header.charAt(0).toUpperCase() + header.slice(1)}</h1>
				<div className="">
					{postList}
				</div>
			</div>
		)
  }
}


export default Details;
