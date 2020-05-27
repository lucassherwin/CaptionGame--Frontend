import React, {Component} from 'react';
import CaptionDisplay from './CaptionDisplay'
import {NavLink, BrowserRouter as Router, Route} from 'react-router-dom';
import PostPage from './PostPage'


export default class Post extends Component {
    state = {
        postID: null
    }

    componentDidMount() {
        this.setState({postID: this.props.postObj.id})
    }

    render(){
        console.log('post id', this.state.postID)
        console.log('post postObj', this.props.postObj)
        return(
            <div>
            <div>
            <NavLink 
                    onClick={() => this.props.setCurrentPostObj(this.props.postObj.id)}
                    to={`/postPage/${this.props.postObj.id}`}
                >
                    See full post
                </NavLink>
            </div>
            <CaptionDisplay />
            </div>
        )
    }
}