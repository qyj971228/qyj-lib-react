import React, { FC, ReactNode } from "react";
import Button from './../button/Button';
import Wave from './../wave/wave';
import { ButtonProps } from "./../button/Button";

const QButton: FC<ButtonProps> = (props) => {

  const { children, ...restProps } = props
  
  return (
    <>
      <Wave>
        <Button {...restProps}>{children}</Button>
      </Wave>
    </>
  )
  
}

export default QButton;