import React, { useState } from 'react';
import MathInput from './components/MathInput';
import TextInput from './components/TextInput';
import { SymbolPicker } from './components/SymbolPicker';

const App: React.FC = () => {
  const [selectedSymbol, setSelectedSymbol] = useState('');
  const [inputMode, setInputMode] = useState<'math' | 'text'>('math');

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
        GPT + WolframAlpha
      </h1>
      <div className="w-full max-w-[800px] px-8 mb-4">
        {inputMode === 'math' ? (
          <MathInput
            className="w-full text-2xl p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            selectedSymbol={selectedSymbol}
          />
        ) : (
          <TextInput
            className="w-full text-2xl p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
          />
        )}
      </div>
      {inputMode === 'math' && <SymbolPicker onSymbolClick={handleSymbolClick} />}
      <div className="flex flex-col items-center mt-4">
        <button
          className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 hover:from-blue-600 hover:via-green-600 hover:to-yellow-600 text-white px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 shadow-lg"
          onClick={handleSubmit}
        >
          Calculate
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
          onClick={() =>
            setInputMode((prevMode) => (prevMode === 'math' ? 'text' : 'math'))
          }
        >
          Toggle Input Mode
        </button>
      </div>
    </div>
  );
};

export default App;
