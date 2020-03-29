import React, { useContext } from 'react';
import { UserContext, PasswordContext } from './AppComp';

function CompF() {
  const user = useContext(UserContext);
  const password = useContext(PasswordContext);

  return (
    <div>
      {user} {password}
    </div>
  );
}

export default CompF;
