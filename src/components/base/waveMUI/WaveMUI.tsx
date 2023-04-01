import React, { FC, ReactNode, useRef } from 'react'
import '../button/button.css'

interface baseWaveUIProps {
  children?: ReactNode
}

type WaveUIProps = Partial<baseWaveUIProps>

const WaveUI: FC<WaveUIProps> = (props) => {
  const { children } = props

  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <span
        ref={buttonRef}
        className="waveUI"
        onClick={(e) => {
          e.stopPropagation()
        }}
      ></span>
      {children}
    </>
  )
}

export default WaveUI
