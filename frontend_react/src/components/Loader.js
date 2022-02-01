import React from 'react';

const Loader = () => {
  return (
    <div className="flex h-3 w-3 relative mx-auto mt-12">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
    </div>
  );
};

export default Loader;
