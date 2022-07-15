import React from "react";
import styled from "styled-components";

const DefaultButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 5px 10px;
  margin: 0px;
  color: #000;
  background-color: #fff;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  transition: all .2s;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
  position: relative;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    filter: brightness(1.3);
    box-shadow: rgb(0 0 0 / 6%) 0px 4px 2px -2px, rgb(0 0 0 / 24%) 0px 4px 4px 0px, rgb(0 0 0 / 22%) 0px 3px 7px 0px;
  }
`;

export interface DefaultButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  
}

const Button: React.FC<DefaultButtonProps> = (props) => {
  return (
    <>
      <DefaultButton>{props.children}</DefaultButton>
    </>
  );
};

export default Button;
