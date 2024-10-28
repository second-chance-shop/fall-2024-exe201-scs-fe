import React, { useEffect, useState } from 'react';
import loadingGif from '../assest/loading.gif';

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
      <img src={loadingGif} alt="Loading..." className="w-20 h-20 mb-4" />
      <p className="mt-4 text-lg font-semibold text-gray-700 animate-fade-in">Loading...</p>
      <div className="w-full max-w-xs mt-6 animate-fade-in">
        <div className="bg-gray-200 rounded-full h-2.5">
          <div
            className={`bg-orange-600 h-2.5 rounded-full transition-all duration-500`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-2 text-center text-gray-600">{progress}%</p>
      </div>
    </div>
  );
};

export default Loading;
