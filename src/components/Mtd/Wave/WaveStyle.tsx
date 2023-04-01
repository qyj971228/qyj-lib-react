import React from 'react'
// import { kindColor } from "../Button/ButtonStyle";
import { kind } from '../Button/Button'

// waveColor
export function getWaveColor(kind?: kind) {
  // return kind ? kindColor[kind] : undefined;
  return kind ? '#fff' : undefined
}
