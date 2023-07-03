import React from 'react';

function Chatbox() {
  return (
    <div className='chatbox' >
      {' '}
      <iframe
        style={{position:"relative"}}
        width="350"
        title="f"
        height="430"
        allow="microphone;"
        src="https://console.dialogflow.com/api-client/demo/embedded/4b32c0bd-2535-46b6-ac0c-364602e65ac4"
      />
      <button className='close-btn btn btn-danger' >X</button>
    </div>
  );
}

export default Chatbox;
