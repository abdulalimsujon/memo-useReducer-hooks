import React, { memo } from 'react';

const Message = ({ numberOfMessage, onHundleIncrement }) => {

    console.log('message rendering')
    return <>
        <p>Send {numberOfMessage} messages</p>
        <button onClick={onHundleIncrement}>IncreamentMessageNumber</button>


    </>

};

export default memo(Message);