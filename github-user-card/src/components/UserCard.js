import React from 'react';

const UserCard = (props) => {
    return (
        <div className='cardContainer'>
            <img className='userPic' src={props.avatar} alt='userPic' />
            <h3>{props.name}</h3>
            <p>Location: {props.location}</p>
            <p>Bio: {props.bio}</p>
            <p>Followers: {props.followers}</p>
            <p>Username: {props.username}</p>
        </div>
    )
}

export default UserCard;