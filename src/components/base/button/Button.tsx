import React, { ButtonHTMLAttributes, FC, ReactNode, useEffect, useRef, useState } from 'react'
import { composeClassNames } from '../../../utils/classCompose'
import './button.css'

type buttonType = 'primary' | 'warn' | 'error'
type buttonSize = 's' | 'm' | 'l'
export type theme = 'dark' | ''

interface buttonPropsBase {
  children?: ReactNode
  kind?: buttonType
  size?: buttonSize
  dashed?: boolean
  round?: boolean
  wave?: boolean
  color?: string
  ghost?: boolean
  simple?: boolean
  circle?: boolean
  disable?: boolean
  text?: boolean
  theme?: theme
  showWave?: Function
  mouseUp?: Function
}

type NativeButtonProps = buttonPropsBase & ButtonHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps>

const Button: FC<ButtonProps> = (props) => {
  const componentPrefix = 'q-btn'

  const {
    className,
    children,
    size,
    kind,
    dashed,
    round,
    wave,
    color,
    style,
    ghost,
    simple,
    circle,
    disable,
    text,
    theme,
    showWave,
    onMouseUp,
    onClick,
    ...restProps
  } = props

  function getDisable() {
    if (disable) {
      if (theme) {
        if (kind && text) return `${theme}-text-${kind}`
        if (text) return `${theme}-text-default`
        if (kind && ghost) return `${theme}-ghost-${kind}`
        if (kind) return `${theme}-${kind}`
        if (ghost) return `${theme}-ghost-default`
        return theme + '-default'
      } else {
        if (color) return 'color'
        if (text && ghost) return 'default-text'
        if (ghost && kind) return kind + '-ghost'
        if (ghost) return 'ghost'
        if (text && kind) return kind + '-text'
        if (simple) return kind + '-simple'
        if (kind) return kind
        if (text) return 'default-text'
        return 'default'
      }
    }
    return ''
  }

  function getTheme() {
    if (theme) {
      if (kind && text && ghost) return `${theme}-${kind}-text`
      if (!kind && text && ghost) return `${theme}-default-text`
      if (kind && ghost) return `${theme}-${kind}-ghost`
      if (kind && text) return `${theme}-${kind}-text`
      if (kind) return `${theme}-${kind}`
      if (text) return `${theme}-default-text`
      if (ghost) return `${theme}-default-ghost`
      return `${theme}-default`
    }
    return ''
  }

  const finalClassName = composeClassNames(className, componentPrefix, {
    size, // q-btn-[size]
    kind: simple ? kind + '-simple' : kind, // q-btn-[kind] | q-btn-[kind-simple]
    dashed, // q-btn-dashed
    round, // q-btn-round
    wave, // q-btn-wave
    ghost: ghost ? kind || 'default' : '', // q-btn-ghost-[kind]
    color: !!color, // q-btn-color
    circle: circle ? size || 'default' : '', // q-btn-circle-[size]
    text: text ? kind || 'default' : false, // q-btn-text
    disable: getDisable(),
    theme: getTheme()
  })

  function getCustomColor() {
    if (theme && !ghost && !text) return '#000'
    if (dashed || text) return color
    if (kind && ghost) return color
    if (kind) return '#fff'
    return color
  }

  function getCustomBackgroundColor() {
    if (ghost || text) return 'transparent'
    if (dashed) return '#fff'
    if (kind) return color
    if (theme) return color
    return '#fff'
  }

  const customColorStyle = {
    // from props.color
    borderColor: text ? 'transparent' : color,
    color: getCustomColor(),
    backgroundColor: getCustomBackgroundColor(),
    filter: disable ? 'brightness(0.7)' : undefined
  }

  const finalStyle = color ? { ...customColorStyle, ...style } : { ...style } // props.style is higher priority than props.color

  function getFinalChildren() {
    if (circle) {
      if (typeof children === 'string') {
        return children[0].toLocaleUpperCase()
      }
    }
    return children
  }

  const finalChildren = getFinalChildren()

  // 存储wave的数组
  const [waveList, setwaveList] = useState<Array<{ top: number, left: number, key: number }>>([])

  // 定时删除wave
  const timer = useRef<NodeJS.Timeout>()

  // 防抖
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setwaveList([])
    }, 500)
    if (!timer.current) {
      timer.current = timeOut
    } else {
      clearTimeout(timer.current)
      timer.current = timeOut
    }
    return () => {
      clearTimeout(timer.current)
    }
  }, [waveList])

  // 按钮对象
  const btnRef = useRef<HTMLButtonElement>(null)

  // wave生成
  function getClickPos(e: React.MouseEvent) {
    const x = e.pageX
    const y = e.pageY
    const rect = btnRef?.current?.getBoundingClientRect()
    if (rect) {
      const absLeft = x - rect.left
      const absTop = y - rect.top
      const wave = { left: absLeft, top: absTop, key: Date.now() } // wave定位
      setwaveList([...waveList, wave])
    }
  }

  return (
    <>
      <button
        ref={btnRef}
        {...restProps}
        className={finalClassName}
        style={{ ...finalStyle }}
        disabled={disable}
        onMouseDown={(e) => {
          getClickPos(e)
        }}
        onClick={(e) => {
          e.stopPropagation()
          onClick && onClick(e)
        }}
        onMouseUp={(e) => {
          e.stopPropagation()
          onMouseUp && onMouseUp(e)
          showWave && showWave()
        }}
      >
        {waveList.map((wave) => {
          const style = {
            top: wave.top + 'px',
            bottom: '0',
            left: wave.left + 'px',
            right: '0'
          }
          return <div className="waveMUI" key={wave.key} style={style}></div>
        })}
        {finalChildren}
      </button>
    </>
  )
}

export default Button
