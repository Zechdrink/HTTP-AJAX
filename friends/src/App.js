import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList/FriendsList.js';
import Form from './components/Form/Form.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }))
      })

      .catch(error => {
        console.error('Server Error', error);
      });
  }



  render() {
    return (
      <div className="App">
       <Form />
       <h1>It's Working</h1>
       <FriendsList friends = {this.state.friends}/>
      </div>
    );
  }
}

export default App;
