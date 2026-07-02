import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
    />
  );
}`;

function Demo() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-lg border" />;
}

export default function Page() {
  return (
    <ComponentDoc slug="calendar">
      <ComponentPreview code={code}>
        <Demo />
      </ComponentPreview>
    </ComponentDoc>
  );
}
