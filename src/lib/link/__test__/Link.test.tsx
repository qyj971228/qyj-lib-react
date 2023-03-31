import { create, act } from "react-test-renderer"
import { it, expect } from "@jest/globals"

import Link from "../Link"

it("Link Hover SnapShot", () => {
  // create
  const component = create(<Link page="http://www.facebook.com">Facebook</Link>)
  let json = component.toJSON()
  expect(json).toMatchSnapshot()

  // update
  act(() => {
    component.update(<Link page="http://www.google.com">Google</Link>)
  })
  json = component.toJSON()
  expect(json).toMatchSnapshot()

  // mouse enter
  act(() => {
    // @ts-ignore
    json.props.onMouseEnter()
  })
  json = component.toJSON()
  expect(json).toMatchSnapshot()

  // mouse leave
  act(() => {
    // @ts-ignore
    json.props.onMouseLeave()
  })
  json = component.toJSON()
  expect(json).toMatchSnapshot()
})

it("Link Hover", () => {
  // create
  const component = create(<Link page="http://www.facebook.com">Facebook</Link>)
  const instance = component.root
  let json = component.toJSON()

  // @ts-ignore
  expect(json.props.className).toBe('normal')
  expect(instance.findByProps({ className: "normal" }).props.className).toBe('normal')

  // update
  act(() => {
    component.update(<Link>Google</Link>)
  })
  json = component.toJSON()

  // @ts-ignore
  expect(json.children).toEqual(['Google'])

  // mouse enter
  act(() => {
    // @ts-ignore
    json.props.onMouseEnter()
  })
  json = component.toJSON()

  // @ts-ignore
  expect(json.props.className).toBe('hovered')

  // mouse leave
  act(() => {
    // @ts-ignore
    json.props.onMouseLeave()
  })
  json = component.toJSON()

  // @ts-ignore
  expect(json.props.className).toBe('normal')
})

it("default page is '#'", () => {
  const component = create(<Link>Facebook</Link>)
  let json = component.toJSON()
  // @ts-ignore
  expect(json.props.href).toBe('#')
})

it("did mouse click worked", () => {
  const component = create(<Link>Facebook</Link>)
  let json = component.toJSON()
  act(() => {
    // @ts-ignore
    json.props.onClick()
  })
})