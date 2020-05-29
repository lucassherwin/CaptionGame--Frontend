import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import PostPage from './components/PostPage.js'
import NewPostForm from './components/NewPostForm.js'
import Newsfeed from './components/Newsfeed.js'
import ProfilePage from './components/ProfilePage.js'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Login from './components/Login.js'

class App extends Component {
  state = {
    showLogin: true,
    allUsers: [],
    currentUserId: null,
    currentPostId: null,
    currentPostObj: null,
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
addNewUser = (event, userObj) => {
  let newUserArr = (this.state.allUsers)
  newUserArr.push(userObj)
  this.setState({allUsers: newUserArr})
  this.findUser(event, userObj.username)
}

  findUser = (event, username) => {
    event.preventDefault();
    this.hideLogin();
    let currentUserObj = this.state.allUsers.find(user => user.username === username)
    console.log('current user obj', currentUserObj)
    // this.setState({currentUserId: currentUserObj.id})

    this.getUserPosts(currentUserObj.id)
    this.getUserCaptions(currentUserObj.id)
    
    this.setState({currentUser: {...this.state.currentUser, userID: currentUserObj.id, username: currentUserObj.username}})
  }

  getUserPosts = (id) => {
    fetch('http://localhost:3001/posts')
    .then(resp => resp.json())
    .then(data => this.setState({currentUser: {...this.state.currentUser, posts: data.filter(post => post.user_id === id)}}))
    // this.forceUpdate()
    console.log(this.state.currentUser.posts)
    // console.log('current setting posts')
    // console.log(this.state.currentUser)
  }

  //getting the current post id
  setCurrentPostObj = (post) => {
    this.setState({currentPostId: post.id})
    this.setState({currentPostObj: post})

    // return post.id
    // console.log('in app', this.state.currentPostId)
}
hideLogin = () => {
  this.setState({showLogin: false})
}
showLogin = () => {
  this.setState({showLogin: true})
}
  addUserPost = (post) => {
    //update state
    let newPostArr = this.state.currentUser.posts
    newPostArr.push(post)
    this.setState({currentUser: {...this.state.currentUser, posts: newPostArr}})
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
      {this.state.showLogin ? <Login addNewUser={this.addNewUser} hideLogin={this.hideLogin} findUser={this.findUser}/> : null}
        <Router>
        <Navbar showLogin={this.showLogin} />
        <Switch>
        <Route exact path="/newsfeed" render={(props) => <Newsfeed {...props} setCurrentPostObj={this.setCurrentPostObj} currentUser={this.state.currentUser}/>} />
        <Route exact path="/profile" render={(props) => <ProfilePage {...props} getUserPosts={this.getUserPosts} currentUser={this.state.currentUser} userCaptions={this.state.currentUser.captions} />} />
      
        <Route exact path="/post" render={(props) => <NewPostForm {...props} currentUser={this.state.currentUser} getUserPosts={this.getUserPosts} addUserPost={this.addUserPost} />} />
        
        <Route exact path={`/postPage/:id`} render={(props) => <PostPage {...props} currentPostObj={this.state.currentPostObj} currentUser={this.state.currentUser} />} />
        </Switch>

      </Router>
    </div>
  );
  }
}

export default App;



//comment