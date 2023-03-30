import './style.css'
import React from 'react'

export default function Input({ props, ...rest }: any) {
  return <input className='input' {...rest} />
}
