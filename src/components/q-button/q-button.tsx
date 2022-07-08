import React, { FC } from "react";
import Button from './../button/Button';
import Wave from './../wave/wave';
import { ButtonProps } from "./../button/Button";

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
      {/* wave(实验性的特性)在使用时得不到border-width的响应支持, 因此自定义border-width会掩盖直至遮蔽wave */}
      { wave && !disable && <Wave><Button {...composeProps}>{children}</Button></Wave> }
      { (!wave || disable) && <Button {...composeProps}>{children}</Button> }
    </>
  )
  
}

export default QButton;