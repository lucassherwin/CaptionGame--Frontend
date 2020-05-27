import React, {Component} from 'react';

export default class NewPostForm extends Component {
state={
    img_url: null
}
handleChange = (event) => {
    console.log(event.target.value)
    
    this.setState({img_url: event.target.value})
}
handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
            "Accepts": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({img_url: this.state.img_url, user_id: this.props.currentUser.userID})
    })
    .then(resp => resp.json())
    .then(data => this.props.addUserPost(data))

    // this.props.getUserPosts(this.props.currentUser.userID)
}
    render(){
        return(
        <form >
            <input onChange={this.handleChange} type="text" name="picture" value={this.state.img_url} />
            <input onClick={this.handleSubmit} type="submit" name="submit" />
        </form>
        )
    }
}