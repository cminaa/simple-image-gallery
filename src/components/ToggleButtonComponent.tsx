import * as React from "react";

export interface ToggleButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  onToggleClick?: (arg0: string) => void;
  value: string;
}

const ToggleButton: React.FunctionComponent<ToggleButtonProps> = (props) => {
  const { isActive, onToggleClick, value, children } = props;
  const setValue = () => {
    onToggleClick && onToggleClick(value);
  };
  return (
    <button
      className={`font-bold py-2 px-4 first:rounded-l-lg last:rounded-r-lg select-none outline-none ${
        isActive
          ? "bg-gray-500 text-black"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
      onClick={setValue}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
