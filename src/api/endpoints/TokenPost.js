import React, { useState } from 'react';

const TokenPost = () => {

  const [token, setToken] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
      }).then(response => {
        console.log(response);
        return response.json();
      }).then(json => {
        console.log(json);
        setToken(json.token);
        return json;
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={({target}) => setUserName(target.value)}/>

      <input type="text" value={password} onChange={({target}) => setPassword(target.value)}/>
      <p style={{ wordBreak: 'break-all'}}>{token}</p>
      <button>Enviar</button>
    </form>
  )
}

export default TokenPost;
