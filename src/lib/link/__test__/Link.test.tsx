import { create, act, ReactTestRendererJSON } from 'react-test-renderer'
import { it, expect } from '@jest/globals'

import Link from '../Link'

it('Link Hover SnapShot', async () => {
  // create
  const component = create(<Link page="http://www.facebook.com">Facebook</Link>)
  let json: ReactTestRendererJSON = component.toJSON() as ReactTestRendererJSON
  expect(json).toMatchSnapshot()

  // update
  await act(() => {
    component.update(<Link page="http://www.google.com">Google</Link>)
  })
  json = component.toJSON() as ReactTestRendererJSON
  expect(json).toMatchSnapshot()

  // mouse enter
  await act(() => {
    json.props.onMouseEnter()
  })
  json = component.toJSON() as ReactTestRendererJSON
  expect(json).toMatchSnapshot()

  // mouse leave
  await act(() => {
    json.props.onMouseLeave()
  })
  json = component.toJSON() as ReactTestRendererJSON
  expect(json).toMatchSnapshot()
})

it('Link Hover', async () => {
  // create
  const component = create(<Link page="http://www.facebook.com">Facebook</Link>)
  const instance = component.root
  let json: ReactTestRendererJSON = component.toJSON() as ReactTestRendererJSON

  expect(json.props.className).toBe('normal')
  expect(instance.findByProps({ className: 'normal' }).props.className).toBe('normal')

  // update
  await act(() => {
    component.update(<Link>Google</Link>)
  })
  json = component.toJSON() as ReactTestRendererJSON

  expect(json.children).toEqual(['Google'])

  // mouse enter
  await act(() => {
    json.props.onMouseEnter()
  })
  json = component.toJSON() as ReactTestRendererJSON

  expect(json.props.className).toBe('hovered')

  // mouse leave
  await act(() => {
    json.props.onMouseLeave()
  })
  json = component.toJSON() as ReactTestRendererJSON

  expect(json.props.className).toBe('normal')
})

it("default page is '#'", () => {
  const component = create(<Link>Facebook</Link>)
  const json: ReactTestRendererJSON = component.toJSON() as ReactTestRendererJSON
  expect(json.props.href).toBe('#')
})

it('did mouse click worked', async () => {
  const component = create(<Link>Facebook</Link>)
  const json: ReactTestRendererJSON = component.toJSON() as ReactTestRendererJSON
  await act(() => {
    json.props.onClick()
  })
})
