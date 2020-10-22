import React, { useState } from 'react';

const UserPost = () => {

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email);

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
      }).then(response => {
        console.log(response);
        return response.json();
      }).then(json => {
        console.log(json);
        return json;
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={({target}) => setUserName(target.value)}/>

      <input type="text" value={password} onChange={({target}) => setPassword(target.value)}/>

      <input type="email" value={email} onChange={({target}) => setEmail(target.value)}/>

      <button>Enviar</button>
    </form>
  )
}

export default UserPost;
