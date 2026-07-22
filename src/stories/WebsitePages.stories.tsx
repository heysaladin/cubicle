import type { Meta, StoryObj } from '@storybook/react';
import HomePage from '@/docs/pages/website/pages/home';
import ProductPage from '@/docs/pages/website/pages/product';
import PricingPage from '@/docs/pages/website/pages/pricing';
import AboutPage from '@/docs/pages/website/pages/about';
import BlogPage from '@/docs/pages/website/pages/blog';
import ContactPage from '@/docs/pages/website/pages/contact';
import FaqPage from '@/docs/pages/website/pages/faq';
import TestimonialsPage from '@/docs/pages/website/pages/testimonials';
import CareersPage from '@/docs/pages/website/pages/careers';
import LegalPage from '@/docs/pages/website/pages/legal';
import AuthPage from '@/docs/pages/website/pages/auth';
import SystemPagesPage from '@/docs/pages/website/pages/system-pages';

const meta: Meta = {
  title: 'Website/Pages',
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = { render: () => <HomePage /> };
export const Product: Story = { render: () => <ProductPage /> };
export const Pricing: Story = { render: () => <PricingPage /> };
export const About: Story = { render: () => <AboutPage /> };
export const Blog: Story = { render: () => <BlogPage /> };
export const Contact: Story = { render: () => <ContactPage /> };
export const Faq: Story = { render: () => <FaqPage /> };
export const Testimonials: Story = { render: () => <TestimonialsPage /> };
export const Careers: Story = { render: () => <CareersPage /> };
export const Legal: Story = { render: () => <LegalPage /> };
export const Auth: Story = { render: () => <AuthPage /> };
export const SystemPages: Story = { render: () => <SystemPagesPage /> };
