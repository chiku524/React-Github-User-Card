import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
import FollowersCard from './components/FollowersCard';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      avatar: '',
      name: '',
      followers: '',
      bio: '',
      username: '',
      location: ''
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/chiku524")
    .then(response => response.json())
    .then(data => this.setState({
      avatar: data.avatar_url,
      name: data.name,
      followers: data.followers,
      bio: data.bio,
      username: data.login,
      location: data.location
    }))
    .catch(error => console.log(error.response));
  }

  render(){
    return (
      <div className="App">
        <UserCard avatar={this.state.avatar} name={this.state.name} followers={this.state.followers} bio={this.state.bio} username={this.state.username} location={this.state.location} />
        <FollowersCard />
      </div>
    );
  }
}

export default App;
