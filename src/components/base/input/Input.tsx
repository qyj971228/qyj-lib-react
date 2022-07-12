import React, { InputHTMLAttributes, FC, ReactNode} from "react";
import { composeClassNames } from '../../../utils/classCompose'
import './input.css'

interface inputPropsBase {
  wave: boolean,
  disable: boolean,
  showWave: Function
}

type NativeInputProps = inputPropsBase & InputHTMLAttributes<HTMLElement>

export type InputProps = Partial<NativeInputProps>

const Input: FC<InputProps> = (props) => {

  const componentPrefix = 'q-input'

  const { className, wave, disable, showWave, onClick ,...restProps } = props

  const finalClassName = composeClassNames(
    className, 
    componentPrefix, 
    {
      
    }
  )

  return (
    <>
      {
        wave && 
        // TODO: inputwave animation
        // <InputWave>
          <input 
            {...restProps} 
            className={finalClassName}
            disabled={disable}
            onClick={(e) => {
              e.stopPropagation
              showWave && showWave()
              onClick && onClick(e)
            }}
          />
        // </InputWave>
      }
      {
        !wave && 
        <input 
          {...restProps} 
          className={finalClassName}
          disabled={disable}
          onClick={(e) => {
            e.stopPropagation
            showWave && showWave()
            onClick && onClick(e)
          }}
        />
      }
    </>
  )

}

export default Input;