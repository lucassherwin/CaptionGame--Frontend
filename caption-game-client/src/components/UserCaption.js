import React, { Component } from 'react'

export class UserCaption extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.captionObj.top_text}</h3>
            </div>
        )
    }
}

export default UserCaption
