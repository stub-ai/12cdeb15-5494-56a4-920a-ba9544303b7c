import React, { useState, useEffect } from 'react';

interface TypeaheadProps {
  options: string[];
}

const TypeaheadDropdown: React.FC<TypeaheadProps> = ({ options }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  useEffect(() => {
    setFilteredOptions(
      options.filter(option =>
        option.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }, [inputValue, options]);

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className="border p-2 rounded w-full"
      />
      {filteredOptions.length > 0 && (
        <ul className="absolute bg-white border rounded w-full">
          {filteredOptions.map(option => (
            <li
              key={option}
              onClick={() => setInputValue(option)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TypeaheadDropdown;