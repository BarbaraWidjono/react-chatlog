import React from 'react';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const Message = (props) => {

  let source = "";
  props.sender === "Vladimir"? source = "local" : source = "remote";
  let styleClass = `chat-entry ${source}`;
  console.log(styleClass);

  return(
    <section className={styleClass}>
      <p className="entry-name">{props.sender}</p>
      <div className = "entry-bubble">
        <p className="entry-body">{props.body}</p>
        <p className="entry-time"><Timestamp time={props.timestamp} /></p>
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
