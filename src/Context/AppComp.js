import React, { useState, useEffect } from 'react';
import CompC from './CompC';

export const UserContext = React.createContext();

function AppComp () {

    return (
        <div>
            <UserContext.Provider value={'Sushil'}>
                <CompC />
            </UserContext.Provider>
        </div>
    )
}

export default AppComp;