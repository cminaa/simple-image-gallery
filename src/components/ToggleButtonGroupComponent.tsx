import * as React from "react";
import { ToggleButtonProps } from "./ToggleButtonComponent";

interface ToggleButtonGroupProps {
  value: string;
  onToggleOptionChange: (arg0: string) => void;
  children: React.ReactElement<ToggleButtonProps>[];
}

const ToggleButtonGroup: React.FunctionComponent<ToggleButtonGroupProps> = (
  props
) => {
  const { children, value, onToggleOptionChange } = props;

  const setValue = (newValue: string) => {
    if (newValue !== value) onToggleOptionChange(newValue);
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            onToggleClick: setValue,
            isActive: value === child.props.value,
          });
        })}
      </div>
    </div>
  );
};

export default ToggleButtonGroup;
