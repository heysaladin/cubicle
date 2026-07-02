import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import type { DateRange } from 'react-day-picker';
import { Calendar } from '@/components/ui/calendar';

const meta: Meta<typeof Calendar> = {
  title: 'UI/Calendar',
  component: Calendar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const SingleDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />;
};

export const Default: Story = {
  render: () => <SingleDemo />,
};

const RangeDemo = () => {
  const [range, setRange] = useState<DateRange | undefined>();
  return <Calendar mode="range" selected={range} onSelect={setRange} className="rounded-md border" />;
};

export const Range: Story = {
  render: () => <RangeDemo />,
};

export const TwoMonths: Story = {
  render: () => <Calendar mode="single" numberOfMonths={2} className="rounded-md border" />,
};
