import React, { Component } from 'react'

export class UserCaption extends Component {
    state={
        allPosts: [],
        captionPost: null
    }
    componentDidMount(){
        fetch('http://localhost:3001/posts')
        .then(resp => resp.json())
        .then(data => this.setState({allPosts: data}))
    }
    findPost= () => {
        let captionPost = this.state.allPosts.find(post => post.id === this.props.captionObj.post_id)
        this.setState({captionPost: captionPost})
    }
    render() {
        return (
            <div>
                <div class="caption_container"><p class="caption_top_text">{this.props.captionObj.top_text}</p><p class="caption_bottom_text">{this.props.captionObj.bottom_text}</p><img class="caption_image" src={this.state.captionPost.img_url} alt=''></img></div> )}

                <h3>{this.props.captionObj.top_text}</h3>
            </div>
        )
    }
}

export default UserCaption
