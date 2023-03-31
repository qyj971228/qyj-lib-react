import { create } from "react-test-renderer"
import { it, expect } from "@jest/globals"

import Button from "../Button"

it('is children correct', () => {
  const component = create(
    <Button>children</Button>
  )
  let json = component.toJSON()

  // @ts-ignore
  expect(json.children).toEqual(['children'])

  component.update(
    <Button>new children</Button>
  )
  json = component.toJSON()

  // @ts-ignore
  expect(json.children).toEqual(['new children'])

})