import React, {Component} from 'react';
import Post from './Post'

export default class Newsfeed extends Component {

    state={
        postList: []
    }
    componentDidMount() {
        fetch('http://localhost:3001/posts')
           .then(resp => resp.json())
           .then(data => this.setState({postList: data}))
    }
    render(){
        return(
            this.state.postList.map(post => <Post postObj={post} />)
        )
    }
}