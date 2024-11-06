import React from 'react';

export const Progress = ({ value, className, indicatorClassName }) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`}>
      <div
        className={`h-2.5 rounded-full ${indicatorClassName}`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};
