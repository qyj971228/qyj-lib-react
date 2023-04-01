import React, { FC } from 'react'
import Wave from '../../base/wave/Wave'
import Input, { InputProps } from '../../base/input/Input'

const QInput: FC<InputProps> = (props) => {
  const { children, wave, disable, ...restProps } = props

  const composeProps = { ...restProps, wave }

  return (
    <>
      {wave && !disable && (
        <Wave>
          <Input {...composeProps}>{children}</Input>
        </Wave>
      )}
      {(!wave || disable) && <Input {...composeProps}>{children}</Input>}
    </>
  )
}

export default QInput
