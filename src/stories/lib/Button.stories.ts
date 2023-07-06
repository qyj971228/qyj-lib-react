import { styles, Button } from '../../lib'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Lib/Button',
  component: Button,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'button'
  }
}
