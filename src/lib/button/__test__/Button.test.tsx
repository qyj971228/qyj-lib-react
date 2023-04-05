import { create, ReactTestRendererJSON } from 'react-test-renderer'
import { it, expect } from '@jest/globals'

import Button from '..'

it('is children correct', () => {
  const component = create(<Button>children</Button>)
  let json: ReactTestRendererJSON = component.toJSON() as ReactTestRendererJSON

  expect(json?.children).toEqual(['children'])

  component.update(<Button>new children</Button>)
  json = component.toJSON() as ReactTestRendererJSON

  expect(json?.children).toEqual(['new children'])
})
