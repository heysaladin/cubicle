import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function CodeBlock({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={cn('relative rounded-lg border bg-muted/50', className)}>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 size-7 text-muted-foreground"
        onClick={copy}
        aria-label="Copy code"
      >
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      </Button>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  );
}
