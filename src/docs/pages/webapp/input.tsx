import { DocPage, DocSection } from '../../components/DocPage';
import { ComponentPreview } from '../../components/ComponentPreview';
import { SearchInput } from '@/components/webapp/SearchInput';
import { FilterBar } from '@/components/webapp/FilterBar';
import { FormField } from '@/components/webapp/FormField';
import { Input } from '@/components/ui/input';

const searchInputCode = `import { SearchInput } from '@/components/webapp/SearchInput';

export function Demo() {
  return <SearchInput placeholder="Search users..." />;
}`;

const filterBarCode = `import { FilterBar } from '@/components/webapp/FilterBar';

const filters = [
  { id: 'active', label: 'Active' },
  { id: 'inactive', label: 'Inactive' },
  { id: 'pending', label: 'Pending' },
  { id: 'admin', label: 'Admin' },
];

export function Demo() {
  return <FilterBar filters={filters} />;
}`;

const formFieldCode = `import { FormField } from '@/components/webapp/FormField';
import { Input } from '@/components/ui/input';

export function Demo() {
  return (
    <div className="space-y-4 w-80">
      <FormField
        label="Email address"
        htmlFor="email"
        helperText="We'll never share your email."
        required
      >
        <Input id="email" type="email" placeholder="you@example.com" />
      </FormField>
      <FormField
        label="Username"
        htmlFor="username"
        error="Username is already taken."
      >
        <Input id="username" placeholder="johndoe" />
      </FormField>
    </div>
  );
}`;

export default function Page() {
  return (
    <DocPage
      title="WebApp - Input"
      description="Input components and form patterns for web applications."
    >
      <DocSection title="SearchInput">
        <ComponentPreview code={searchInputCode}>
          <div className="w-72">
            <SearchInput placeholder="Search users..." />
          </div>
        </ComponentPreview>
      </DocSection>

      <DocSection title="FilterBar">
        <ComponentPreview code={filterBarCode}>
          <FilterBar
            filters={[
              { id: 'active', label: 'Active' },
              { id: 'inactive', label: 'Inactive' },
              { id: 'pending', label: 'Pending' },
              { id: 'admin', label: 'Admin' },
            ]}
          />
        </ComponentPreview>
      </DocSection>

      <DocSection title="FormField">
        <ComponentPreview code={formFieldCode}>
          <div className="space-y-4 w-80">
            <FormField
              label="Email address"
              htmlFor="email"
              helperText="We'll never share your email."
              required
            >
              <Input id="email" type="email" placeholder="you@example.com" />
            </FormField>
            <FormField
              label="Username"
              htmlFor="username"
              error="Username is already taken."
            >
              <Input id="username" placeholder="johndoe" />
            </FormField>
          </div>
        </ComponentPreview>
      </DocSection>
    </DocPage>
  );
}
