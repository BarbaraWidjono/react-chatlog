import React from 'react';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const Message = (props) => {
  return(
    <section class="chat-entry">
      <p class="entry-name">{props.sender}</p>
      <div class = "entry-bubble">
        <p class="entry-body">{props.body}</p>
        <p class="entry-time"><Timestamp time={props.timestamp} /></p>
      </div>
    </section>
  )
}

Message.propTypes = {
  sender: PropTypes.string,
  body: PropTypes.string,
  timestamp: PropTypes.string,
}

export default Message;
