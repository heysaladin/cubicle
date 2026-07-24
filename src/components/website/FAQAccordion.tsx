import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  items: FAQItem[];
  type?: 'single' | 'multiple';
}

export function FAQAccordion({ items, type = 'single' }: FAQAccordionProps) {
  return (
    <Accordion type={type as 'single'} collapsible className="w-full space-y-2">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-4">
          <AccordionTrigger className="text-sm font-medium text-left hover:no-underline py-4">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground pb-4">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
