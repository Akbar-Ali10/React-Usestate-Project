


import React, { useState } from "react";




const TextPrompt = () => {
  const [text, setText] = useState(""); 

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };

  const handleRemove = () => {
    setText("");
  };

  return (
    <div className="text-prompt-container">
      <h2>Akbar Ali Text Prompt</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="5"
        placeholder="Enter your text here..."
        className="text-area"
      ></textarea>
      <div className="button-group">
        <button onClick={handleUppercase} className="button button-uppercase">
          Uppercase
        </button>
        <button onClick={handleLowercase} className="button button-lowercase">
          Lowercase
        </button>
        <button onClick={handleCopy} className="button button-copy">
          Copy
        </button>
        <button onClick={handleRemove} className="button button-remove">
          Remove
        </button>
      </div>
    </div>
  );
};

export default TextPrompt;
