import React, { useState, useEffect, useRef } from 'react';

interface MathInputProps {
  className?: string;
  selectedSymbol?: string;
}

const MathInput: React.FC<MathInputProps> = ({ className, selectedSymbol }) => {
  const [expression, setExpression] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleExpressionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExpression(event.target.value);
  };

  useEffect(() => {
    if (selectedSymbol) {
      setExpression((prevExpression) => prevExpression + selectedSymbol);
    }
  }, [selectedSymbol]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [expression]);

  return (
    <div className="flex flex-col">
      <input
        ref={inputRef}
        type="text"
        className={`border border-gray-450 p-2 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-md text-lg w-full ${className}`}
        value={expression}
        onChange={handleExpressionChange}
        placeholder="Enter your math expression here..."
      />
    </div>
  );
};

export default MathInput;
