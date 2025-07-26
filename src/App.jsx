import { useState } from "react";

function App() {
  const MIN_VALUE = 0;
  const MAX_VALUE = 10;
  const INITIAL_VALUE = 5;

  const [counter, setCounter] = useState(INITIAL_VALUE);

  const addValue = () => {
    console.log("Value added:", counter);
    if (counter >= MAX_VALUE) {
      console.log("Counter upper limit reached");
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    console.log("Value removed:", counter);
    if (counter <= MIN_VALUE) {
      console.log("Counter lower limit reached");
      setCounter(MAX_VALUE);
    } else {
      setCounter(counter - 1);
    }
  };

  const resetCounter = () => {
    setCounter(INITIAL_VALUE);
    console.log("Counter reset to 5");
  };

  const getProgress = () => {
    return (counter / MAX_VALUE) * 100;
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Interactive Counter
          </h1>
          <div className="text-5xl font-extrabold text-blue-600 mb-4">
            {counter}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div
              className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${getProgress()}%` }}
            ></div>
          </div>

          <p className="text-sm text-gray-600">
            Progress: {counter}/{MAX_VALUE}
          </p>
        </div>

        {/* Control Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={addValue}
            disabled={counter >= MAX_VALUE}
            className="w-full py-3 px-4 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <span>+</span>
            Increment ({counter >= MAX_VALUE ? "Reset to 0" : counter + 1})
          </button>

          <button
            onClick={removeValue}
            disabled={counter <= MIN_VALUE}
            className="w-full py-3 px-4 bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <span>-</span>
            Decrement ({counter <= MIN_VALUE ? "Reset to 10" : counter - 1})
          </button>

          <button
            onClick={resetCounter}
            className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Reset to 5
          </button>
        </div>

        {/* Information Panel */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-700 mb-2">Rules:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Lower Limit: {MIN_VALUE}</li>
            <li>• Upper Limit: {MAX_VALUE}</li>
            <li>• Auto-reset when limits are reached</li>
            <li>• Initial value: {INITIAL_VALUE}</li>
          </ul>
        </div>

        {/* Status Messages */}
        {counter === MAX_VALUE && (
          <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg">
            🎉 Maximum value reached! Next increment will reset to 0.
          </div>
        )}

        {counter === MIN_VALUE && (
          <div className="mt-4 p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded-lg">
            🔄 Minimum value reached! Next decrement will reset to 10.
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
