import React, { Component } from 'react'

export class UserPost extends Component {
    render() {
        return (
            <div>
                <img src={this.props.postObj.img_url} alt=''></img>
               
            </div>
        )
    }
}

export default UserPost
