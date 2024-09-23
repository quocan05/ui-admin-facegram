import React from 'react';
import './LabelField.scss';
interface ILabelFieldProps {
  children?: React.ReactNode;
  label?: string;
}

const LabelField = ({ children, label, ...rest }: ILabelFieldProps) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      {children}
    </fieldset>
  );
};

export default LabelField;
