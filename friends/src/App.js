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


  postPersonToServer = (event, friend) => {
    event.preventDefault();
    axios
    .post('http://localhost:5000/friends', friend)
    .then( response => { console.log("resolved:", response);
    this.setState({ friends: response.data })

  })

    .catch( error => console.log("Uh Oh:", error))

} 

removePersonFromServer = (event, id)  => {
  event.preventDefault();
  axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then( response => {
      this.setState({
        friends: response.data
      })
    })
    .catch(err => console.log(err));
}


  render() {
    return (
      <div className="App">
       <Form postPersonToServer = {this.postPersonToServer}/>
       <h1>It's Working</h1>
       <FriendsList friends = {this.state.friends}
       removeFriend = {this.removePersonFromServer}
       />
      </div>
    );
  }
}

export default App;
