import { Meta, StoryObj } from '@storybook/web-components';
import { SwellGreeting } from './Greeting';

// CONFIGURATION
const meta = {
  title: 'components/Greeting',
  component: "swell-greeting",
  tags: ['autodocs'],
} satisfies Meta<typeof SwellGreeting>;

export default meta;
type Story = StoryObj<typeof meta>;

// STORIES
export const Default: Story = {
  args: {},
};
