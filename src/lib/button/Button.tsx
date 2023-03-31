import './style.css'

export default function Button({ props, children, ...rest }: any) {
  return <button className='button' {...rest}>{children}</button>
}
