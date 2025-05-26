import type { Meta, StoryObj } from '@storybook/react';

import { TableSample } from '../components/Table';

const meta = {
  title: 'Components/Table',
  component: TableSample,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TableSample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};