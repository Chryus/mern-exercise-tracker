import React, { useState } from 'react';

const CreateUser = function () {
  const [username, setUsername] = useState("test user");

  function onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: username,
    };
    console.log(newUser);
  }

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Create User" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default CreateUser
