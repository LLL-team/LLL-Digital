import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({ name, email, subject, message }) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>You have received a new message from your website contact form.</p>
    <h2>Subject: {subject}</h2>
    <hr />
    <h3>Sender Details:</h3>
    <ul>
      <li><strong>Name:</strong> {name}</li>
      <li><strong>Email:</strong> {email}</li>
    </ul>
    <hr />
    <h3>Message:</h3>
    <p>{message}</p>
  </div>
);
