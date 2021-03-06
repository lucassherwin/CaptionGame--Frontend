import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Post from './Post'
import PostPage from './PostPage'


export default class Newsfeed extends Component {

    state={
        postList: [],
        currentId: null
    }
    componentDidMount() {
        fetch('http://localhost:3001/posts')
            .then(resp => resp.json())
            .then(data => this.setState({postList: data}))
    }

    render(){
        console.log(this.state.postList)
        return(
            this.state.postList.map(post => <Post key={post.id} postObj={post} setCurrentPostObj={this.props.setCurrentPostObj} currentUser={this.props.currentUser} />)
        )
    }
}