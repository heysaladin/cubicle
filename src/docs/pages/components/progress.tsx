import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

export function ProgressDemo() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-full max-w-sm" />;
}`;

function Demo() {
  const [progress, setProgress] = useState(13);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return <Progress value={progress} className="w-full max-w-sm" />;
}

export default function Page() {
  return (
    <ComponentDoc slug="progress">
      <ComponentPreview code={code}>
        <Demo />
      </ComponentPreview>
    </ComponentDoc>
  );
}
