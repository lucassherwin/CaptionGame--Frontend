import React, {Component} from 'react';
import UserPost from './UserPost'
import UserCaption from './UserCaption'

export default class ProfilePage extends Component {
    render(){
        return(
            <div>
                <h1>This is the profile page</h1>
                <div>
                    <h2>Posts</h2>
                    <UserPost />
                </div>
                <div>
                    <p>Username</p>
                    <p>User Bio</p>
                    <p>User Profile</p>
                </div>
                <div>
                    <h2>Captions</h2>
                    <UserCaption />
                </div>
            </div>
        )
    }
}