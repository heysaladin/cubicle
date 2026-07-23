import * as React from 'react';
import { Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { SiteHeader } from '@/components/website/SiteHeader';
import { SiteFooter } from '@/components/website/SiteFooter';
import { SectionWrapper } from '@/components/website/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const CONTACT_METHODS = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: 'Email us',
    description: 'For general inquiries and support.',
    value: 'hello@cubicle.io',
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: 'Live chat',
    description: 'Chat with our team in real time.',
    value: 'Available in the app',
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: 'Response time',
    description: 'We typically respond within:',
    value: '< 4 hours (business days)',
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: 'Office',
    description: 'Come say hello.',
    value: 'San Francisco, CA',
  },
];

export function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <SectionWrapper background="default" size="md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — form */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Get in touch</h1>
              <p className="text-muted-foreground">
                Have a question, feedback, or want to explore a partnership? We'd love to hear from you.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="first">First name</Label>
                  <Input id="first" placeholder="Aria" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="last">Last name</Label>
                  <Input id="last" placeholder="Chen" />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email">Work email</Label>
                <Input id="email" type="email" placeholder="aria@company.com" />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Acme Corp" />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="topic">Topic</Label>
                <Select>
                  <SelectTrigger id="topic">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sales">Sales inquiry</SelectItem>
                    <SelectItem value="support">Technical support</SelectItem>
                    <SelectItem value="billing">Billing</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="press">Press & media</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help..."
                  rows={5}
                />
              </div>

              <Button className="w-full">Send message</Button>
            </form>
          </div>

          {/* Right — contact methods */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONTACT_METHODS.map((method) => (
                <div key={method.title} className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    {method.icon}
                    <span className="text-sm font-semibold">{method.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{method.description}</p>
                  <p className="text-xs font-medium">{method.value}</p>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="aspect-video rounded-xl bg-muted border flex items-center justify-center">
              <div className="text-center space-y-1">
                <MapPin className="h-6 w-6 text-muted-foreground mx-auto" />
                <p className="text-sm text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SiteFooter />
    </div>
  );
}
