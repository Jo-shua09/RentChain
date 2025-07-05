import React from 'react';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-t-4 border-primary rounded-full animate-spin"></div>
        <p className="mt-4 text-2xl font-medium text-primary">Loading...</p>
      </div>
    </div>
  );
}