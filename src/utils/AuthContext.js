import M from 'materialize-css';
import React, { createContext, useState } from 'react';


const UserContext = createContext();
const AuthContext = props => {
  const [user, setUser] = useState(null);

  // user Handler
  const userHandler = user =>
    M.toast({
      html: 'Successfully Signed Up',
      classes: 'green lighten-1 white-text',
      completeCallback: () => setUser(user),
    });

  return (
    <UserContext.Provider value={{ user: user, userHandler: userHandler }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { AuthContext, UserContext };

