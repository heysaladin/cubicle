import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function AvatarDemo() {
  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/heysaladin.png" alt="@heysaladin" />
        <AvatarFallback>CB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>CB</AvatarFallback>
      </Avatar>
    </div>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="avatar">
      <ComponentPreview code={code}>
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/heysaladin.png" alt="@heysaladin" />
            <AvatarFallback>CB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>CB</AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
}
