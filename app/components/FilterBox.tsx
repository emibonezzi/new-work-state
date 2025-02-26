import React from "react";

interface Props {
  name: string;
  options: string[];
}

const FilterBox = ({ name, options }: Props) => {
  return (
    <div className="border border-[rgb(11_93_102)] rounded-lg p-4">
      <h3>{name}</h3>
      <ul>
        {options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBox;
