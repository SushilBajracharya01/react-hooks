import React, { useState } from 'react';
import Banner from '../components/Banner';
import Button from '../components/Button';

function Result() {
    const [result, setResult] = useState(true);

    return (
        <div>{result ? <Banner winner="X" message="WINNER" /> : null}
            <div style={{ position: 'absolute' }}>
                <Button value="END GAME" handleClick={()=>setResult(!result)} styles="reset">END GAME</Button>
            </div>
        </div>
    )
}

export default Result;