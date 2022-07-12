import React from "react";
import { CSSObject } from "@emotion/styled";
import { size, theme, kind } from "./Button";

// kind
export const kindColor = {
  primary: "#2080f0",
  warn: "#f0a020",
  error: "#d03050",
};

export function getButtonKind(kind?: kind) {
  return kind
    ? {
        // borderColor: kindColor[kind],
        color: "#fff",
        backgroundColor: kindColor[kind],
        "&:hover": {
          borderColor: kindColor[kind],
          color: "#fff",
        },
      }
    : {};
}

// size
const sizeMagnification = {
  small: 0.5,
  medium: 1,
  large: 1.5,
};

export function getButtonSize(size?: size) {
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

// theme
const themeBrightness = {
  dark: 1.3,
  light: 1,
};

export function getButtontheme(theme?: theme) {
  return theme
    ? {
        filter: `brightness(${themeBrightness[theme]})`,
        "&:hover": {
          filter: `brightness(${themeBrightness[theme] + 0.2})`,
        },
      }
    : {};
}

// default
export const defaultButtonStyles: CSSObject = {
  display: "inline-block",
  boxSizing: "border-box",
  padding: "5px 10px",
  margin: "0px",
  color: "#000",
  backgroundColor: "#fff",
  border: "0",
  borderRadius: "2px",
  cursor: "pointer",
  transition: "all .2s",
  fontSize: "14px",
  textAlign: "center",
  overflow: "hidden",
  position: "relative",
  boxShadow:
    "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
  "&:active": {
    filter: "brightness(1.2)",
    boxShadow:
    "rgb(0 0 0 / 6%) 0px 4px 2px -2px, rgb(0 0 0 / 24%) 0px 4px 4px 0px, rgb(0 0 0 / 22%) 0px 3px 7px 0px",
  },
};
