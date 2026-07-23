import { DocPage, DocSection } from '../../components/DocPage';
import { LogoCloud } from '@/components/website/LogoCloud';

const LOGOS = [
  { name: 'Acme Corp' },
  { name: 'Globex Inc' },
  { name: 'Initech' },
  { name: 'Umbrella Co' },
  { name: 'Weyland' },
  { name: 'Soylent' },
];

export default function Page() {
  return (
    <DocPage
      title="Website — Media & Visual"
      description="Media and visual components for marketing websites."
    >
      <DocSection title="LogoCloud — With label">
        <div className="border rounded-lg p-8 bg-background">
          <LogoCloud label="Trusted by teams at" logos={LOGOS} />
        </div>
      </DocSection>

      <DocSection title="LogoCloud — No label">
        <div className="border rounded-lg p-8 bg-muted">
          <LogoCloud logos={LOGOS.slice(0, 4)} label="" />
        </div>
      </DocSection>

      <DocSection title="Product Screenshot placeholder">
        <div className="border rounded-lg overflow-hidden bg-muted aspect-video flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="h-12 w-12 rounded-lg bg-primary/20 mx-auto flex items-center justify-center">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">Product screenshot / media</p>
          </div>
        </div>
      </DocSection>
    </DocPage>
  );
}
