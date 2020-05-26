import React, {Component} from 'react';
import CaptionDisplay from './CaptionDisplay'
import {NavLink, BrowserRouter as Router, Route} from 'react-router-dom';
import PostPage from './PostPage'

export default class Post extends Component {
        
    
    render(){
        console.log(this.props.postObj.id)
        return(
            <div>
                <div>
                    <NavLink
                    onClick={() => this.props.returnFunc(this.props.postObj)}
                    to={`/PostPage/${this.props.postObj.id}`}
                    >
                    See full post
                   </NavLink>
                </div>
                  
            </div>
            // <CaptionDisplay />
           
        )
    }
}