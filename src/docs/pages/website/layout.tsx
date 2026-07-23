import { DocPage, DocSection } from '../../components/DocPage';
import { SectionWrapper, SectionHeading } from '@/components/website/SectionWrapper';
import { SiteHeader } from '@/components/website/SiteHeader';
import { SiteFooter } from '@/components/website/SiteFooter';

export default function Page() {
  return (
    <DocPage
      title="Website — Layout"
      description="Layout components for marketing websites."
    >
      <DocSection title="SectionWrapper — Size variants">
        <div className="space-y-3">
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <div key={size} className="border rounded-lg overflow-hidden bg-muted">
              <SectionWrapper size={size} background="muted">
                <div className="flex items-center justify-center border-2 border-dashed border-muted-foreground/30 rounded-lg py-4">
                  <p className="text-xs text-muted-foreground">SectionWrapper size="{size}"</p>
                </div>
              </SectionWrapper>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="SectionWrapper — Background variants">
        <div className="space-y-3">
          <div className="border rounded-lg overflow-hidden">
            <SectionWrapper background="default" size="sm">
              <p className="text-xs text-center text-muted-foreground">background="default"</p>
            </SectionWrapper>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <SectionWrapper background="muted" size="sm">
              <p className="text-xs text-center text-muted-foreground">background="muted"</p>
            </SectionWrapper>
          </div>
        </div>
      </DocSection>

      <DocSection title="Full page layout preview">
        <div className="border rounded-lg overflow-hidden text-sm scale-[0.8] origin-top -mb-16">
          <SiteHeader />
          <SectionWrapper size="sm" background="default">
            <SectionHeading
              eyebrow="Features"
              title="Built for speed and simplicity"
              description="Everything your team needs, none of what slows you down."
            />
          </SectionWrapper>
          <SectionWrapper size="sm" background="muted">
            <p className="text-center text-muted-foreground text-xs">Content section (muted background)</p>
          </SectionWrapper>
          <SiteFooter />
        </div>
      </DocSection>
    </DocPage>
  );
}
