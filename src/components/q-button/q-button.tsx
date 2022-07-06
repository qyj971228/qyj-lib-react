import React, { FC } from "react";
import Button from './../button/Button';
import Wave from './../wave/wave';
import { ButtonProps } from "./../button/Button";

const QButton: FC<ButtonProps> = (props) => {

  const { children, wave, dashed, simple, kind, ...restProps } = props

  function simpleDashed() {
    if (kind && dashed && !simple) {
      return { simple: true }
    } else {
      return { simple: simple}
    }
  }

  const Simple = simpleDashed()
  const composeProps = {...restProps, ...Simple, kind, dashed}

  return (
    <>
      { wave && <Wave><Button {...composeProps}>{children}</Button></Wave> }
      { !wave && <Button {...composeProps}>{children}</Button> }
    </>
  )
  
}

export default QButton;