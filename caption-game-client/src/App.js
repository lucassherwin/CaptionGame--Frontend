import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import PostPage from './components/PostPage.js'
import NewPostForm from './components/NewPostForm.js'
import Newsfeed from './components/Newsfeed.js'
import ProfilePage from './components/ProfilePage.js'
import { BrowserRouter as Router, Route /*, Switch,*/  } from 'react-router-dom';
import Login from './components/Login.js'

class App extends Component {
  state = {
    allUsers: [],
    currentUserId: null,
    currentPostId: null,
    currentUser: {
      posts: [],
      captions: [],
      username: '',
      userID: null
    }
  }
  changePage = (event) => {
    // console.log(event.innerText)
  }
  componentDidMount() {
    //store all current users from db in state
    fetch('http://localhost:3001/users')
    .then(resp => resp.json())
    .then(data => this.setState({allUsers: data}))
  }

  findUser = (event, username) => {
    event.preventDefault();

    let currentUserObj = this.state.allUsers.find(user => user.username === username)
    console.log('current user obj', currentUserObj)
    // this.setState({currentUserId: currentUserObj.id})

    this.getUserPosts(currentUserObj.id)
    this.getUserCaptions(currentUserObj.id)
    
    this.setState({currentUser: {...this.state.currentUser, userID: currentUserObj.id, username: currentUserObj.username}})
    // this.setState({currentUser: {...this.state.currentUser, username: currentUserObj.username}})
    
    

    // console.log('test', this.state.currentUser)
  }

  getUserPosts = (id) => {
    fetch('http://localhost:3001/posts')
    .then(resp => resp.json())
    .then(data => this.setState({currentUser: {...this.state.currentUser, posts: data.filter(post => post.user_id === id)}}))
    // console.log(this.state.currentUser)
  }

  getUserCaptions = (idvar) => {
    fetch('http://localhost:3001/captions')
    .then(resp => resp.json())
    .then(data => this.setState({currentUser: {...this.state.currentUser, captions: data.filter(caption => caption.user_id === idvar)}}))
    // console.log(this.state.currentUser)
  }

  render() {
  return (  
    <div className="App">
      <Login findUser={this.findUser}/>
        <Router>
        <Navbar />
        <Route exact path="/newsfeed" render={(props) => <Newsfeed {...props} setStateFunction={this.returnId}/>} />
        <Route exact path="/profile" render={(props) => <ProfilePage {...props} userPosts={this.state.currentUser.posts} currentUser={this.state.currentUser} userCaptions={this.state.currentUser.captions} />} />
      
        <Route exact path="/post" component={NewPostForm} />
        
        <Route path={`/PostPage/${this.state.currentPostId}`} render={(props) => <PostPage {...props} />} />

      </Router>
    </div>
  );
  }
}

export default App;



//comment