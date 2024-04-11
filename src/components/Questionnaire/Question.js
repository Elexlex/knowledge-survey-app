import React from 'react';

const Question = ({ category, text, options }) => {
  return (
    <div>
      <p>{text}</p>
      <select>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Question;
