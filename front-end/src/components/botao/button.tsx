import React from 'react';
export const ConfirmeButton: React.FC<ButtonProps> = (props) => {
  return <button className="button-confirmed">{props.label}</button>;
};
interface ButtonProps {
  label: string;
  action?: string;
}
export default ConfirmeButton;
