import React, {Component} from 'react';
import PostPicture from './PostPicture'
import Caption from './Caption'
import Timer from './Timer'
import AddCaptionForm from './AddCaptionForm'

export default class PostPage extends Component {
    state = {
        // topText: 'top',
        // bottomText: 'bottom',
        currentPost: {},
        currentCaptions: [],
        newCaption: {topText: 'topText', bottomText: 'bottomText'}
    }

    handleTopChange = (event) => {
        this.setState({newCaption: {...this.state.newCaption, topText: event.target.value}})
    }

    handleBottomChange = (event) => {
        this.setState({newCaption: {...this.state.newCaption, bottomText: event.target.value}})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        fetch('http://localhost:3001/captions', {
            method: 'POST',
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({top_text: this.state.newCaption.topText, bottom_text: this.state.newCaption.bottomText, user_id: this.props.currentUser.userID, post_id: this.state.currentPost.id})
        })
        .then(response => response.json())
        .then(this.showNewCaption())
        
    }
    showNewCaption = () => {
        let newArr = this.state.currentCaptions;
        let newCaptionObj = {top_text: this.state.newCaption.topText, bottom_text: this.state.newCaption.bottomText, user_id: this.props.currentUser.userID, post_id: this.state.currentPost.id}
        newArr.push(newCaptionObj);
        this.setState({currentCaptions: newArr})
        console.log(this.state.currentCaptions)
        this.props.getCaptions()
    }
    componentDidMount() {
        this.setState({currentPost: this.props.currentPostObj})
        this.getAllCaptions()
    }
    getAllCaptions = () => {
        fetch('http://localhost:3001/captions')
        .then(resp => resp.json())
        .then(data => this.listCaptions(data))
    }
    listCaptions = (all) => {
    let currentCaptions = all.filter(caption => caption.post_id === this.state.currentPost.id)
    this.setState({currentCaptions: currentCaptions})
    console.log(this.state.currentCaptions)
    }
    render(){
    console.log(this.state.currentCaptions)
        return(
            <div>Post page
                <div class="container">
                    <img class="post_image" src={this.props.currentPostObj.img_url} alt=''></img>
                    <p class="top_text" >{this.state.newCaption.topText}</p>
                    <p class="bottom_text" >{this.state.newCaption.bottomText}</p>
                </div>
                
                {/* <p>{this.props.currentPostObj.img_url}</p> */}
                <form>
                    <label class="inputbox">
                        Top Text
                    <input class="inputbox" onChange={this.handleTopChange} type="text" value={this.state.newCaption.topText} name="TopText" />
                    </label>
                    <label class="inputbox">
                        Bottom Text
                    <input class="inputbox" onChange={this.handleBottomChange} type="text" value={this.state.newCaption.bottomText} name="BottomText" />
                    </label>
                    <input class="inputbox" type="submit" value="submit" onClick={this.handleSubmit} />
                </form>
                <div>
        {this.state.currentCaptions.map(caption => <div class="caption_container"><p class="caption_top_text">{caption.top_text}</p><p class="caption_bottom_text">{caption.bottom_text}</p><img class="caption_image" src={this.props.currentPostObj.img_url} alt=''></img></div> )}
        
                 
                 </div>
            </div>
        )
    }
}