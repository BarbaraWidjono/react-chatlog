import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

const ChatLog = (props) => {

  const messages = props.messages.map((message, i) => {
    return <Message key={i} sender={message.sender} body={message.body} timestamp={message.timeStamp} />
  })
  return(
    <section class="chat-log">
      {messages}
    </section>
  );
}

ChatLog.PropTypes = {
  messages: PropTypes.array,
};

export default ChatLog;
