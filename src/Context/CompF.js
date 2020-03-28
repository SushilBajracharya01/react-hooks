import React from 'react';
import { UserContext } from './AppComp';

function CompF() {
    return (
        <div>
            <UserContext.Consumer>
                {name => {
                    return (
                        <h1>hello, { name }</h1>
                    )
                }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default CompF;