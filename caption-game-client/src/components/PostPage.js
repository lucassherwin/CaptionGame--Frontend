import React, {Component} from 'react';
import PostPicture from './PostPicture'
import Caption from './Caption'
import Timer from './Timer'
import AddCaptionForm from './AddCaptionForm'

export default class PostPage extends Component {
    state = {
        topText: 'top',
        bottomText: 'bottom',
        currentPost: {}
    }

    handleTopChange = (event) => {
        this.setState({topText: event.target.value})
    }

    handleBottomChange = (event) => {
        this.setState({bottomText: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        fetch('http://localhost:3001/captions', {
            method: 'POST',
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({top_text: this.state.topText, bottom_text: this.state.bottomText, user_id: this.props.currentUser.userID, post_id: this.props.currentPostObj.id})
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    componentDidMount() {
        console.log('props on mount', this.props)
        console.log('in mount', this.state.currentPost)
        // this.setState({currentPost: this.props.currentPostObj})
    }

    render(){
        return(
            <div>Post page
                {/* <img src={this.props.currentPostObj.img_url} alt=''></img> */}
                <p>{this.props.currentPostObj.img_url}</p>
                <p>{this.state.currentPost.img_url}</p>
                <form>
                    <label>
                        Top Text
                    <input onChange={this.handleTopChange} type="text" value={this.state.topText} name="TopText" />
                    </label>
                    <label>
                        Bottom Text
                    <input onChange={this.handleBottomChange} type="text" value={this.state.bottomText} name="BottomText" />
                    </label>
                    <input type="submit" value="submit" onClick={this.handleSubmit} />
                </form>
                <p>Top Text: {this.state.topText}</p>
                <p>Bottom Text: {this.state.bottomText}</p>
            </div>
        )
    }
}