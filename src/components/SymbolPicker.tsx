import React from 'react';

interface SymbolPickerProps {
  onSymbolClick: (symbol: string) => void;
}

export const SymbolPicker: React.FC<SymbolPickerProps> = ({ onSymbolClick }) => {
  const symbols = ['+', '-', '*', '/', '^', '∫', '∂', '(', ')', '[', ']'];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <p className="font-bold mb-2"></p>
      <div className="flex flex-wrap">
        {symbols.map((symbol) => (
          <button
            key={symbol}
            className="bg-gray-200 text-gray-800 px-3 py-2 m-1 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
            onClick={() => onSymbolClick(symbol)}
          >
            {symbol}
          </button>
        ))}
      </div>
    </div>
  );
};