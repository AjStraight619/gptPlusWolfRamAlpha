import React, { useState } from 'react';
import MathInput from './components/MathInput';
import { SymbolPicker } from './components/SymbolPicker';

const App: React.FC = () => {
  const [selectedSymbol, setSelectedSymbol] = useState('');

  const handleSymbolClick = (symbol: string) => {
    setSelectedSymbol(symbol);
  };

  const handleSubmit = () => {
    console.log('Submitted');
    // Perform your desired actions on submit
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 mb-6">
        GPT + WolfRamAlpha 
        
      </h1>
      <div className="w-full max-w-[800px] px-8 mb-4">
        <MathInput
          className="w-full text-2xl p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
          selectedSymbol={selectedSymbol}
        />
      </div>
      <SymbolPicker onSymbolClick={handleSymbolClick} />
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
