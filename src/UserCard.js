import React from 'react'

const UserCard = (props) => {
    return(
        <div class="ui card">
 
  <div className="content">
    <a className="header">User Details</a>
    
    <div className="description">
      
      {props.children}
    </div>
    </div>
    <div className='ui bottom button'>
        <i className='add icon'></i>Add friend
    </div>
  </div>
  
 


        
    )
}
export default UserCard;