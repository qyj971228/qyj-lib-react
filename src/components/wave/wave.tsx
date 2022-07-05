import React, { FC, ReactNode, useState } from "react";

interface baseWaveProps {
  children?: ReactNode
}

type WaveProps = Partial<baseWaveProps>

const Wave: FC<WaveProps> = (props) => {

  const { children } = props

  const [wave, setwave] =  useState<boolean>()

  const showWave = () => {
    if (wave) {
      setwave(false)
      setTimeout(() => {setwave(true), 0})  // 异步设置状态,否则react视作useState不发生改变
    } else {
      setwave(true)
    }
  }

  return (
    <>
      {
        React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null  // is children element
          const childProps = {...child.props, wave, showWave}  // compose new props
          return React.cloneElement(child, childProps)  // create new element
        })
      }
    </>
  )
  
}

export default Wave;