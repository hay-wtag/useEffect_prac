import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  
  const [users,setUsers]= useState([])

  const getUsers = async () =>{
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  }

  useEffect(()=>{
getUsers();
  },[])

  return <React.Fragment>
    <h2>Users from GitHub</h2>
    <ul className="users">
      {users.map((user)=>{
  const {id,login,avatar_url,html_url} = user;
return (
  <li key={id}>
    <img src={avatar_url} />
    <div>
      <h3>{login}</h3>
      <a href={html_url}>profile</a>
      </div> 
     </li>
)
      })}
    </ul>
  </React.Fragment>
};

export default UseEffectFetchData;
