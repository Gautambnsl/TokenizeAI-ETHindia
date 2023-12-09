import React from 'react';
// import { pushClient } from './pushProtocol';

const NotificationForm = () => {
  const [message, setMessage] = React.useState('');

  const sendNotification = async (message) => {
    // const channel = pushClient.channel('general');
    // channel.publish({
    //   title: 'New Notification',
    //   body: message
    // });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send the notification message using Push Protocol
    await sendNotification(message);

    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} />
      <button type="submit">Send Notification</button>
    </form>
  );
};

export default NotificationForm;
