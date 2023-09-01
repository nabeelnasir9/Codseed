import { useState } from "react";
import axios from 'axios';
const Contact = () => {
  const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/send', { email, subject, message });
            alert(response.data);
        } catch (error) {
            alert("Failed to send the email. Please try again later.");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="text" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} required />
            <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} required></textarea>
            <button type="submit">Send</button>
        </form>
    );
}

export default Contact