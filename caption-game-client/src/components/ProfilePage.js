import React, {Component} from 'react';
import UserPost from './UserPost'
import UserCaption from './UserCaption'

export default class ProfilePage extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.setState({posts: this.props.currentUser.posts}) 
    }
    
    render(){
        // console.log(this.props)
        // {this.setState({posts: this.props.currentUser.posts}) }
        // {this.forceUpdate()}
        // console.log(posts)
        return(
            <div>
                <h1>{this.props.currentUser.username}</h1>
                <div>
                    <h2>Posts</h2>
                    { this.state.posts.map(post => <UserPost key={post.id} postObj={post} />)}
                    {/* {console.log(this.state.posts)} */}
                
                </div>
                <div>
                   
                    {/* <p>User Bio</p>
                    <p>User Profile</p> */}
                </div>
                <div>
                    <h2>Captions</h2>
                    {this.props.currentUser.captions.map(caption => <UserCaption key={caption.id} captionObj={caption}/> )}
                </div>
            </div>
        )
    }
}