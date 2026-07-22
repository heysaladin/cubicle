import { DocPage, DocSection } from '../../components/DocPage';
import { ComponentPreview } from '../../components/ComponentPreview';
import { MetricCard } from '@/components/webapp/MetricCard';
import { ChartWidget } from '@/components/webapp/ChartWidget';

const metricCardCode = `import { MetricCard } from '@/components/webapp/MetricCard';

export function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <MetricCard
        title="Monthly Revenue"
        value="$48,295"
        change="+12.5%"
        changeType="increase"
        period="vs last month"
        data={[30, 45, 38, 60, 52, 78, 70]}
      />
      <MetricCard
        title="Support Tickets"
        value="134"
        change="-8.3%"
        changeType="decrease"
        period="vs last month"
        data={[80, 65, 72, 58, 62, 50, 45]}
      />
    </div>
  );
}`;

const chartWidgetCode = `import { ChartWidget } from '@/components/webapp/ChartWidget';

export function Demo() {
  return (
    <ChartWidget
      title="Page Views"
      description="Daily page views for the selected period"
    />
  );
}`;

export default function Page() {
  return (
    <DocPage
      title="WebApp - Visualization"
      description="Data visualization and chart components for web applications."
    >
      <DocSection title="MetricCard">
        <ComponentPreview code={metricCardCode}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
            <MetricCard
              title="Monthly Revenue"
              value="$48,295"
              change="+12.5%"
              changeType="increase"
              period="vs last month"
              data={[30, 45, 38, 60, 52, 78, 70]}
            />
            <MetricCard
              title="Support Tickets"
              value="134"
              change="-8.3%"
              changeType="decrease"
              period="vs last month"
              data={[80, 65, 72, 58, 62, 50, 45]}
            />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="ChartWidget">
        <ComponentPreview code={chartWidgetCode} previewClassName="items-start p-6">
          <div className="w-full max-w-xl">
            <ChartWidget
              title="Page Views"
              description="Daily page views for the selected period"
            />
          </div>
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
