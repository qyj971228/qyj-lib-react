import React, { FC, ButtonHTMLAttributes, useRef } from "react";
import { css } from "@emotion/css";
import Wave from "../Wave/Wave";
import { useWaves } from "../Hook/useWaves";
import {
  getButtonKind,
  getButtonSize,
  getButtontheme,
  defaultButtonStyles,
} from "./ButtonStyle";
import { getWaveColor } from "../Wave/WaveStyle";

export type size = "small" | "medium" | "large";
export type kind = "primary" | "warn" | "error";
export type theme = "dark" | "light";

// props
export interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  size?: size;
  kind?: kind;
  theme?: theme;
}

const Button: FC<ButtonProps> = (props) => {
  const { kind, size, theme, children, onMouseDown, ...restProps } = props;

  const kindStyles = getButtonKind(kind);
  const sizeStyles = getButtonSize(size);
  const themeStyles = getButtontheme(theme);

  // 按钮对象
  const btnRef = useRef<HTMLButtonElement>(null);

  // 生成wavelist的hook
  const { waveList, getClickPos } = useWaves(btnRef);

  // onMouseDown
  function finalOnMouseDown(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    getClickPos(e);
    onMouseDown && onMouseDown(e);
  }

  // className
  const finalClassName = css({
    ...defaultButtonStyles,
    ...kindStyles,
    ...sizeStyles,
    ...themeStyles,
  });

  return (
    <button
      className={finalClassName}
      ref={btnRef}
      onMouseDown={(e) => finalOnMouseDown(e)}
      {...restProps}
    >
      <Wave waveList={waveList} color={getWaveColor(kind)}></Wave>
      {children}
    </button>
  );
};

export default Button;
