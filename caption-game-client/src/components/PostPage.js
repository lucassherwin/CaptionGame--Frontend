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
        this.setState({currentPost: this.props.currentPostObj})
    }

    render(){
    console.log(this.props)
        return(
            <div>Post page
                <div class="container">
                    <img class="post_image" src={this.props.currentPostObj.img_url} alt=''></img>
                    <p class="top_text" >{this.state.topText}</p>
                    <p class="bottom_text" >{this.state.bottomText}</p>
                </div>
                
                {/* <p>{this.props.currentPostObj.img_url}</p> */}
                <form>
                    <label class="inputbox">
                        Top Text
                    <input class="inputbox" onChange={this.handleTopChange} type="text" value={this.state.topText} name="TopText" />
                    </label>
                    <label class="inputbox">
                        Bottom Text
                    <input class="inputbox" onChange={this.handleBottomChange} type="text" value={this.state.bottomText} name="BottomText" />
                    </label>
                    <input class="inputbox" type="submit" value="submit" onClick={this.handleSubmit} />
                </form>
                
            </div>
        )
    }
}