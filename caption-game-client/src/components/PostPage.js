import React, {Component} from 'react';
import PostPicture from './PostPicture'
import Caption from './Caption'
import Timer from './Timer'
import AddCaptionForm from './AddCaptionForm'

export default class PostPage extends Component {
    state={
        topText: 'top',
        bottomText: 'bottom'
    }
    handleTopChange = (event) => {
        this.setState({topText: event.target.value})
    }
    handleBottomChange = (event) => {
        this.setState({BottomText: event.target.value})
    }
    render(){
        return(
            <div>Post page
                <form>
                    <label>
                        Top Text
                    <input onChange={this.handleTopChange} type="text" value={this.state.topText} name="TopText" />
                    </label>
                    <label>
                        Bottom Text
                    <input onChange={this.handleBottomChange} type="text" value={this.state.bottomText} name="BottomText" />
                    </label>
                    
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}