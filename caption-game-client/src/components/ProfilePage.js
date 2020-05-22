import React, {Component} from 'react';
import UserPost from './UserPost'
import UserCaption from './UserCaption'

export default class ProfilePage extends Component {
    render(){
        return(
            <div>
                <div>
                    <h1>This is the profile page</h1>
                    <h2>Posts</h2>
                </div>

                <UserPost />

                <div>
                    <p>Username</p>
                    <p>User Bio</p>
                </div>
            </div>
        )
    }
}