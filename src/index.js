import React from 'react';
import ReactDOM from 'react-dom'
import SingleComment from './SingleComment';
import profile1 from './images/person1.jpg'
import profile2 from './images/person2.jpg'
import profile3 from './images/person3.jpg'
import UserCard from './UserCard';
const First = () => {
   return(
    <div className = 'ui comments'>
      <UserCard>
      <SingleComment name='arun' profile={profile1} time='Today at 3 pm' text='good'/>
      </UserCard>
      <UserCard>
      <SingleComment name='aki' profile={profile3} time='Today at 4 pm' text='nice'/>
      </UserCard>
      <UserCard>
      <SingleComment name='arun' profile={profile1} time='Today at 6 pm' text='awesome'/>
      </UserCard>
    </div>
   )
}

ReactDOM.render( <First />, document.querySelector('#root'))