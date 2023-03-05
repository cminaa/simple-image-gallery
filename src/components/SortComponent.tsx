import * as React from "react";

export interface SortOption {
  value: string;
  label: string;
}

interface SortProps {
  options: SortOption[];
  onSortValueChange: (arg0: string) => void;
}

const Sort: React.FunctionComponent<SortProps> = (props) => {
  const handleSortChange = (event: { target: { value: string } }) => {
    props.onSortValueChange(event.target.value);
  };

  return (
    <div>
      <label className="mr-2 font-bold text-sm">Sort by:</label>
      <select
        onChange={handleSortChange}
        className="text-sm rounded border-none outline-none appearance-none bg-gray-200 px-4 py-2 cursor-pointer hover:bg-gray-30 focus:bg-gray-300 focus:shadow-outline-blue"
      >
        {props.options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Sort;
