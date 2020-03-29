import React, { useState, useEffect } from 'react';
import CompC from './CompC';

export const UserContext = React.createContext();
export const PasswordContext = React.createContext();

function AppComp() {
  return (
    <div>
      <UserContext.Provider value="Sushil">
        <PasswordContext.Provider value="Ram">
          <CompC />
        </PasswordContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default AppComp;
