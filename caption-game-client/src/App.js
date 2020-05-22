import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import PostPage from './components/PostPage.js'
import NewPostForm from './components/NewPostForm.js'
import Newsfeed from './components/Newsfeed.js'
import ProfilePage from './components/ProfilePage.js'


class App extends Component {

  componentDidMount() {
    console.log('test')
  }
  render() {
  return (
    <div className="App">
      <ProfilePage />
    </div>
  );
  }
}

export default App;
