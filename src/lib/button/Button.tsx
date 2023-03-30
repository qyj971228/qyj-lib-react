import './style.css'
import React from 'react'

export default function Button({ props, children, ...rest }: any) {
  return <button className='button' {...rest}>{children}</button>
}
