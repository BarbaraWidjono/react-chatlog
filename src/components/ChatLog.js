import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

const ChatLog = (props) => {

  const messages = props.messages.map((message, i) => {

    return <Message key={i} sender={message.sender} body={message.body} timestamp={message.timeStamp} />
  })
  return(
    <section className="chat-log">
      {messages}
    </section>
  );
}

ChatLog.propTypes = {
  messages: PropTypes.array,
};

export default ChatLog;
