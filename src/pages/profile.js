import { useState } from 'react';

function Profile() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function registerUser() {
    
  }

  return (
  <div>
    <div>
      <label htmlFor="email">Email: </label>
      <input id="email" value={email} onChange={event => setEmail(event.target.value)}/>
    </div>

    <div>
      <label htmlFor="password">Senha: </label>
      <input id="password" type="password" value={password} onChange={event => setPassword(event.target.value)}/>
    </div>

    <button onClick={() => registerUser()} >Me clique!</button>
  </div>
  )
}

export default Profile;