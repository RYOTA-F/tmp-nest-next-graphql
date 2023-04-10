import type { Meta, StoryObj } from '@storybook/react'

import Button from './'

const meta: Meta<typeof Button> = {
  title: 'Components/Elements/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: () => (
    <Button onClick={() => alert('ボタンが押されました')}>test</Button>
  ),
}
