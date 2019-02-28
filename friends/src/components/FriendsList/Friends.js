import React from 'react';


const Friends = props => {

    const {name, age, email} = props.friend;

return (
    <div className = "card">
        <button onClick = {e => props.removeFriend(e, props.friend.id)}>Go Away</button>
       <h3>{`Name: ${name}`}</h3>
       <h3>{`Age: ${age}`}</h3>
       <h3>{`Email: ${email}`}</h3>
    </div>
)

}

export default Friends;