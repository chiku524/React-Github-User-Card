import React from 'react';

class FollowersCard extends React.Component {
    constructor(){
        super();
        this.state = {
            myFollowers: {}
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/users/chiku524/followers')
        .then(res => res.json())
        .then(followers => {this.setState({
            myFollowers: followers
        })})
        .catch(error => console.log(error.response))
    }

    render(){
        return (
            <div>
                <h2>Followers</h2>
                <div className='followersContainer'>
                {console.log('followers', this.state)}
                {Object.values(this.state.myFollowers).map(user => (
                    <div className='followersCard'>
                        <img className='image' src={user.avatar_url} alt='userAvatar' />
                        <p>{user.login}</p>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}

export default FollowersCard;