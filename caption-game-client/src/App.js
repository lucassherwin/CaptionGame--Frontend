import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import PostPage from './components/PostPage.js'
import NewPostForm from './components/NewPostForm.js'
import Newsfeed from './components/Newsfeed.js'
import ProfilePage from './components/ProfilePage.js'
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';
import Login from './components/Login.js'

class App extends Component {
  state = {
    currentUserId: 1,
    currentUser: {
      posts: [],
      captions: [],
      username: '',
      bio: ''
    }
  }
  changePage = (event) => {
    console.log(event.innerText)
  }
  componentDidMount() {
    console.log('test')
    // fetch('http://localhost:3001/posts')
    // .then(resp => resp.json())
    // .then(data => console.log(data))
    this.getUserPosts(1)
    this.getUserName(1)
    this.getUserCaptions(1)
  }
  getUserPosts = (id) => {
    fetch('http://localhost:3001/posts')
    .then(resp => resp.json())
    .then(data => this.setState({currentUser: {...this.state.currentUser, posts: data.filter(post => post.user_id === id)}}))
    console.log(this.state.currentUser)
  }
  getUserName = (idvar) => {
    fetch('http://localhost:3001/users')
    .then(resp => resp.json())
    .then(data => this.setState({currentUser: {...this.state.currentUser, username: data.find(user => user.id === idvar).name}}))
    console.log(this.state.currentUser)
  }
  getUserCaptions = (idvar) => {
    fetch('http://localhost:3001/captions')
    .then(resp => resp.json())
    .then(data => this.setState({currentUser: {...this.state.currentUser, captions: data.filter(caption => caption.user_id === idvar)}}))
    console.log(this.state.currentUser)
  }
  render() {
  return (
    
    <div className="App">
    <Login />
        <ProfilePage />
        <Router>
        <Navbar />
        <Route path="/newsfeed" component={Newsfeed} />
        <Route path="/profile" render={(props) => <ProfilePage {...props} userPosts={this.state.currentUser.posts} userName={this.state.currentUser.username} userCaptions={this.state.currentUser.captions} />} />
      
        <Route path="/post" component={PostPage} />
      </Router>
    </div>
  );
  }
}

export default App;



//comment