import React, { FC } from "react";
import Wave from "../../base/wave/Wave";
import Button from '../../base/button/Button';
import { ButtonProps } from "../../base/button/Button";

const QButton: FC<ButtonProps> = (props) => {

  const { children, wave, dashed, simple, kind, disable, ...restProps } = props

  function simpleDashed() {
    if (kind && dashed && !simple) {
      return { simple: true }
    } else {
      return { simple: simple}
    }
  }

  const Simple = simpleDashed()
  
  const composeProps = {...restProps, ...Simple, kind, dashed, disable}

  return (
    <>
      { wave && !disable && <Wave><Button {...composeProps}>{children}</Button></Wave> }
      { (!wave || disable) && <Button {...composeProps}>{children}</Button> }
    </>
  )
  
}

export default QButton;