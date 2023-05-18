import React, { useState, useRef, useEffect } from 'react';

interface TextInputProps {
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({ className }) => {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [text]);

  return (
    <div className="flex flex-col">
      <input
        ref={inputRef}
        type="text"
        className={`border border-gray-450 p-2 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-md text-lg w-full ${className}`}
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      />
    </div>
  );
};

export default TextInput;