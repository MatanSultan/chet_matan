import React from 'react';
import { FaPiedPiperSquare } from 'react-icons/fa';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import './Messages.css';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    
    {messages.map((message, i) => <div className='mescolor' key={i}>   <FaPiedPiperSquare className="icon"/><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
);

export default Messages;