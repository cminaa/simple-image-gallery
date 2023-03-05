import * as React from "react";

interface ToggleProps {
  firstOption: React.ReactNode;
  secondOption: React.ReactNode;
  isFirstActive: boolean;
  onToggleOptionChange: (arg0: boolean) => void;
}

const Toggle: React.FunctionComponent<ToggleProps> = (props) => {
  const { firstOption, secondOption, isFirstActive, onToggleOptionChange } =
    props;

  const setValue = () => {
    onToggleOptionChange(!isFirstActive);
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          onClick={setValue}
          className={`   font-bold py-2 px-4 rounded-l-lg ${
            isFirstActive
              ? "bg-gray-500 text-black"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {firstOption}
        </button>
        <button
          onClick={setValue}
          className={` font-bold py-2 px-4 rounded-r-lg ${
            !isFirstActive
              ? "bg-gray-500 text-black"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {secondOption}
        </button>
      </div>
    </div>
  );
};

export default Toggle;
