import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { ComponentDoc } from '../../components/ComponentDoc';
import { ComponentPreview } from '../../components/ComponentPreview';

const code = `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`;

export default function Page() {
  return (
    <ComponentDoc slug="resizable">
      <ComponentPreview code={code}>
        <ResizablePanelGroup orientation="horizontal" className="max-w-md rounded-lg border">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ComponentPreview>
    </ComponentDoc>
  );
}
