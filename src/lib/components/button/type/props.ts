import { ButtonHTMLAttributes } from 'react'
const PREFIX = 'qyj-btn'
const KIND = ['normal', 'warn', 'error'] as const
const SIZE = ['s', 'm', 'l'] as const

const WEIGHT_EFFECT = ['dashed', 'ghost'] as const // 被weight影响的
const WEIGHT = ['primary'] as const

const ROUND = 'round'
const DASHED = 'dashed'
const GHOST = 'ghost'

const BOOLEAN_PROP = [ROUND, DASHED, GHOST] // 布尔型

type Kind = (typeof KIND)[number] | undefined
type Size = (typeof SIZE)[number]
type Weight = (typeof WEIGHT)[number]

type ButtonPropsBase = Partial<{
  kind: Kind
  size: Size
  round: boolean
  dashed: boolean
  ghost: boolean
  weight: Weight
}>

type NativeButtonProps = Partial<ButtonHTMLAttributes<HTMLElement>>
type ButtonProps = NativeButtonProps & ButtonPropsBase

export default ButtonProps

export { PREFIX, KIND, WEIGHT_EFFECT, ROUND, DASHED, GHOST, BOOLEAN_PROP }

export type { Kind, Weight, ButtonPropsBase }
