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
    fetch('http://localhost:3001/posts')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }
  render() {
  return (
    
    <div className="App">
      <header>
      <Navbar />
      </header>
      
      
      <body>
      <Newsfeed />
      </body>
      
       

    </div>
  );
  }
}

export default App;
