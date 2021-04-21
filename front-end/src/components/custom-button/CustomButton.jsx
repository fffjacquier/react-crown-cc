import React from 'react';
import { CustomButtonContainerStyles } from './CustomButtonStyles';

const CustomButton = ({ children, ...props }) => {
  return (
    <CustomButtonContainerStyles {...props}>
      {children}
    </CustomButtonContainerStyles>
  );
};

export default CustomButton;
