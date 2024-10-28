import React, { useEffect, useState } from 'react';

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev === 100) {
          clearInterval(interval);
          return prev;
        }
        return prev + 10;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="loader border-8 border-t-8 border-gray-300 border-t-blue-500 rounded-full w-20 h-20 animate-spin mb-4"></div>
      <p className="mt-4 text-lg font-semibold text-gray-700 animate-fade-in">Loading...</p>
      <div className="w-full max-w-xs mt-6 animate-fade-in">
        <div className="bg-gray-200 rounded-full h-2.5">
          <div
            className={`bg-blue-600 h-2.5 rounded-full transition-all duration-500`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-2 text-center text-gray-600">{progress}%</p>
      </div>
    </div>
  );
};

export default Loading;
