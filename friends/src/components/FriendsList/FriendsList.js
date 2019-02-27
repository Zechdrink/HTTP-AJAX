import React from 'react';
import Friends from './Friends.js';


const FriendsList = props => {
    return (
        <div>
           {props.friends.map( (friend) => { return  <Friends key = {friend.id} friend = {friend} />})}
            
        </div>
    )

}

export default FriendsList;