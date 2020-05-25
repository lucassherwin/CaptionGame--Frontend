import React, { Component } from 'react'

export class UserPost extends Component {
    render() {
        return (
            <div>
                <p>{this.props.postObj.img_url}</p>
            </div>
        )
    }
}

export default UserPost
