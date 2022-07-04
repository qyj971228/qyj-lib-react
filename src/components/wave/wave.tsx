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
          if (!React.isValidElement(child)) return null  // 判断children是否是节点元素
          const childProps = {...child.props, wave, showWave}  // 生成props
          return React.cloneElement(child, childProps)  // 为新节点追加props 
        })
      }
    </>
  )
  
}

export default Wave;