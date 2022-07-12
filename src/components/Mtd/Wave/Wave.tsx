import { css, keyframes } from "@emotion/css";
import React, { FC } from "react";

interface WaveBaseProps extends HTMLElement {
  waveList?: { top: number; left: number; key: number, size: number}[];
  color?: string
}

type WaveProps = Partial<WaveBaseProps>;

const Wave: FC<WaveProps> = (props) => {

  const { waveList, color } = props;

  // wave半径大小为元素最大大小两倍
  const size = waveList ? waveList.length > 0 ? waveList[0].size * 2 * 1.5 : 0 : 0

  const wui = keyframes(`
    0% {
      width: 0;
      height: 0;
      opacity: 0.4;
    }
    100% {
      width: ${size}px;
      height: ${size}px;
      opacity: 0;
    }
  `);
  const waveStyles = css(`
    position: absolute;
    top: 50%;
    bottom: 0;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);
    background-color: ${color};
    opacity: 0;
    border-radius: 100%;
    animation: ${wui};
    animation-duration: .8s;
    animation-timing-function: ease;
  `);

  return (
    <>
      {waveList?.map((wave) => {
        const style = {
          top: wave.top + "px",
          bottom: "0",
          left: wave.left + "px",
          right: "0",
        };
        return <span className={waveStyles} style={style} key={wave.key}></span>;
      })}
    </>
  );
};

export default Wave;
