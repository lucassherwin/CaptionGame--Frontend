import React, {Component} from 'react';
import UserPost from './UserPost'
import UserCaption from './UserCaption'

export default class ProfilePage extends Component {
    
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>This is the profile page</h1>
                <div>
                    <h2>Posts</h2>
                    {this.props.userPosts.map(post => <UserPost key={post.id} postObj={post} />)}
                
                </div>
                <div>
                    <p>{this.props.userName}</p>
                    <p>User Bio</p>
                    <p>User Profile</p>
                </div>
                <div>
                    <h2>Captions</h2>
                    {this.props.userCaptions.map(caption => <UserCaption key={caption.id} captionObj={caption}/> )}
                </div>
            </div>
        )
    }
}