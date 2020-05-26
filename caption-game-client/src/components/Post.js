import React, {Component} from 'react';
import CaptionDisplay from './CaptionDisplay'
import {NavLink} from 'react-router-dom';
import PostPage from './PostPage'

export default class Post extends Component {
        
    
    render(){
        console.log(this.props.postObj)
        return(
            <div>
               <NavLink
                   to="/PostPage"
                   >
                    See full post
                   </NavLink> 
            <CaptionDisplay />
            </div>
        )
    }
}