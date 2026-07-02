import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes styled with Cubicle tokens by default.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="accordion">
      <ComponentPreview code={code}>
        <Accordion type="single" collapsible className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>Yes. It comes styled with Cubicle tokens by default.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </ComponentPreview>
    </ComponentDoc>
  );
}
