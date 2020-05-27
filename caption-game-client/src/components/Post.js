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
                    to="/postPage"
                >
                    See full post
                </NavLink> 
            </div>
            <div>
                <Router>
                    <Route path="/postPage" component={PostPage} />
                </Router>
            </div>
                
                {/* <PostPage /> */}
            <CaptionDisplay />
            </div>
            // <CaptionDisplay />
           
        )
    }
}