import React, { useCallback, useState } from 'react';
import Message from './Components/Message';

const MemoHooks = () => {

    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    const onHundleIncrementMessage = useCallback(() => {

        setCount(count + 1);


    }, [count])

    console.log('app rendering')
    return (
        <div>
            <hr />

            {
                toggle ? 'On' : 'Off'
            }
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            <h1>Count : {count}</h1>

            <button
                onClick={() => setCount((count) => count + 1)}

            >Increament</button>

            <Message numberOfMessage={count} onHundleIncrement={onHundleIncrementMessage}></Message>

        </div>



    );


};

export default MemoHooks;