import { Slider } from '@/components/ui/slider';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { Slider } from '@/components/ui/slider';

export function SliderDemo() {
  return <Slider defaultValue={[50]} max={100} step={1} className="w-full max-w-sm" />;
}`;

export default function Page() {
  return (
    <ComponentDoc slug="slider">
      <ComponentPreview code={code}>
        <Slider defaultValue={[50]} max={100} step={1} className="w-full max-w-sm" />
      </ComponentPreview>
    </ComponentDoc>
  );
}
