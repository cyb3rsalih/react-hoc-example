import React, { Component } from 'react';
import axios from 'axios'
import Posts from './components/Posts'
import Users from './components/Users'

import './App.css';

class App extends Component {

  state = {
    posts: [],
    users: [],
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(posts => posts.data)
    .then(posts => {
      setTimeout( () => {
        this.setState({
          posts,
        })
      }, 2000)
    })

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(users => users.data)
    .then(users => {
      setTimeout( () => {
        this.setState({
          users,
        })
      }, 500)
    })
  }

  render() {
    return (
      <div className="App">
        <Users {...this.state} />
        <Posts {...this.state} />
      </div>
    );
  }
}

export default App;
