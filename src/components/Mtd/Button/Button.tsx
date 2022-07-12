import React, { FC, ButtonHTMLAttributes, useState, useRef, useEffect } from "react";
import styled, { CSSObject } from "@emotion/styled";
import { css, keyframes } from "@emotion/css";
import Wave from "../Wave/Wave";
import { useWaves } from "../Hook/useWaves";

export type size = "small" | "medium" | "large";
export type kind = "primary" | "warn" | "error";
export type theme = "dark" | "light";

/**
 * props
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  size?: size;
  kind?: kind;
  theme?: theme;
}

/**
 * kind
 */
export const kindColor = {
  primary: "#2080f0",
  warn: "#f0a020",
  error: "#d03050",
};

function getButtonKind(kind?: kind) {
  return kind
    ? {
        borderColor: kindColor[kind],
        color: "#fff",
        backgroundColor: kindColor[kind],
        "&:hover": {
          borderColor: kindColor[kind],
          color: "#fff",
        },
        "&:active": {
          filter: "brightness(0.8)",
        },
      }
    : {};
}

/**
 * size
 */
export const sizeMagnification = {
  small: 0.5,
  medium: 1,
  large: 1.5,
};

function getButtonSize(size?: size) {
  return size
    ? {
        fontSize: `${sizeMagnification[size] * 14}px`,
        padding:
          `${sizeMagnification[size] * 5}px` +
          ` ` +
          `${sizeMagnification[size] * 10}px`,
      }
    : {};
}

/**
 * theme
 */
export const themeBrightness = {
  dark: 1.3,
  light: 1,
};

function getButtontheme(theme?: theme) {
  return theme
    ? {
        filter: `brightness(${themeBrightness[theme]})`,
        "&:hover": {
          filter: `brightness(${themeBrightness[theme] + 0.2})`,
        },
        "&:focus": {
          filter: `brightness(${themeBrightness[theme] + 0.2})`,
        },
        "&:active": {
          filter: `brightness(${themeBrightness[theme] - 0.2})`,
        },
      }
    : {};
}

/**
 * default
 */
const defaultButtonStyles: CSSObject = {
  display: "inline-block",
  boxSizing: "border-box",
  padding: "5px 10px",
  margin: "0px",
  color: "#000",
  backgroundColor: "#fff",
  border: "1px solid #000",
  borderRadius: "2px",
  cursor: "pointer",
  transition: "all .2s",
  fontSize: "14px",
  textAlign: "center",
  overflow: "hidden",
  position: "relative",
  "&:hover": {
    color: `${kindColor.primary}`,
    borderColor: `${kindColor.primary}`,
    outline: "none",
    filter: "brightness(1.2)",
  },
  "&:focus": {
    filter: "brightness(1.2)",
  },
  "&:active": {
    filter: "brightness(0.8)",
  },
};

const Button: FC<ButtonProps> = (props) => {
  const { kind, size, theme, children, onMouseDown, ...restProps } = props;

  const kindStyles = getButtonKind(kind);
  const sizeStyles = getButtonSize(size);
  const themeStyles = getButtontheme(theme);

  // 按钮对象
  const btnRef = useRef<HTMLButtonElement>(null);

  // 生成wavelist的hooks
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
      <Wave waveList={waveList}></Wave>
      {children}
    </button>
  );
};

export default Button;