import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import Navbar from '../Navbar/Navbar.js';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown for rendering Markdown
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import Geminilogo from "../Chatbot/img/gemini.svg"
import background from '../Dashboard/BG.png';

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(`${process.env.REACT_APP_GOOGLE_API_KEY}`);

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false); // State variable for tracking loading status
  const conversationEndRef = useRef(null); // Ref for keeping track of the end of conversation div

  useEffect(() => {
    // Retrieve previous conversation from local storage
    const storedConversation = JSON.parse(localStorage.getItem('conversation'));
    if (storedConversation) {
      setConversation(storedConversation);
    }

    // Add event listener for beforeunload to clear local storage
    window.addEventListener('beforeunload', clearLocalStorage);

    return () => {
      // Remove event listener when component unmounts
      window.removeEventListener('beforeunload', clearLocalStorage);
    }
  }, []);

  const clearLocalStorage = () => {
    localStorage.removeItem('conversation');
  }

  const scrollToBottom = () => {
    conversationEndRef.current?.scrollIntoView({ behavior: "smooth" }); // Scroll to the end of conversation when it updates
  }

  useEffect(scrollToBottom, [conversation]);

  const handleRequest = async () => {
    if (!userInput.trim()) return;

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    try {
      setLoading(true); // Set loading to true when making the request

      const model = genAI.getGenerativeModel({ model: "gemini-pro", safetySettings });
      const prompt = userInput;

      const result = await model.generateContentStream(prompt);
      const response = await result.response;
      const text = await response.text();

      // Update conversation with AI's response
      const updatedConversation = [...conversation, { type: 'user', text: userInput }, { type: 'ai', text }]; // Add AI's response to the end of the conversation
      setConversation(updatedConversation);
      localStorage.setItem('conversation', JSON.stringify(updatedConversation));
    } catch (error) {
      console.error('Error generating content:', error);
      // Handle error if necessary
    } finally {
      setLoading(false); // Set loading to false after the request is completed
    }

    setUserInput('');
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleRequest();
    }
  }

  const handleClearChat = () => {
    setConversation([]); // Clear conversation state
    clearLocalStorage(); // Clear local storage
  }

  return (
    <div className='chatbot-bg' style={{ backgroundImage: `url(${background})` }}>
      <div className='chat-nav'>
        <Navbar />
      </div>
      <div className='chat-content'>
        <div className='conversation'>
          {conversation.length === 0 && 
          <div className='welcome-text'>
            <div className='main-welcome-chat'>Welcome!</div>
            <div className='msg-chat'>Start a conversation by typing a message.</div>
            <div className='msg-chat1'>Powered by Google <img className='gemini-logo' src={Geminilogo}/></div>
          </div>}
          {conversation.map((message, index) => (
            <div key={index} className={message.type === 'user' ? 'user-message' : 'ai-response'}>
              {message.type === 'user' ? message.text : <ReactMarkdown>{message.text}</ReactMarkdown>}
            </div>
          ))}
          <div ref={conversationEndRef}></div> {/* Empty div as a reference point for scrolling to the bottom */}
        </div>
        {loading && <span className='loading-chat'>Brewing a reply...</span>}

        <div className='user-request-field'>
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder='Type your message...'
            className='user-input-chatbot'
          />
          <button onClick={handleRequest} className='snd-btn'>Send</button>
          <button onClick={handleClearChat} className='clear-btn'>Clear Chat</button>
        </div>
      </div>
    </div>
  )
}

export default Chatbot;
