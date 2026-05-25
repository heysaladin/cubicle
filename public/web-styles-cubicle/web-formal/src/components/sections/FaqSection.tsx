'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/Label'
import { cn } from '@/lib/utils'

interface FaqItem {
  question: string
  answer: string
}

interface FaqColumn {
  items: FaqItem[]
}

interface FaqSectionProps {
  label?: string
  title?: string
  description?: string
  columns?: [FaqColumn, FaqColumn]
  variant?: 'default' | 'dark'
}

const defaultColumns: [FaqColumn, FaqColumn] = [
  {
    items: [
      {
        question: 'What types of companies do you work with?',
        answer: 'We work with growing businesses, scale-ups, and established companies looking to clarify strategy, improve performance, or navigate complex change.',
      },
      {
        question: 'What challenges do you typically help solve?',
        answer: 'Our focus includes strategic direction, operational efficiency, organizational alignment, and decision-making in high-impact situations.',
      },
      {
        question: 'How does your consulting process work?',
        answer: 'We begin with a structured assessment, define clear priorities, and translate insights into practical, actionable steps tailored to your business.',
      },
      {
        question: 'Where does consulting create impact?',
        answer: 'The strongest impact comes from clearer priorities, aligned leadership, and faster, more confident decision-making.',
      },
      {
        question: 'How do you tailor your approach to each client?',
        answer: 'Every engagement is customized. We adapt our frameworks, tools, and depth of involvement to your goals, industry, and team structure.',
      },
      {
        question: 'Do you work with leadership teams directly?',
        answer: 'Yes. We collaborate closely with founders, executives, and senior leaders to ensure alignment and effective decision-making.',
      },
    ],
  },
  {
    items: [
      {
        question: 'Who gains the most from partnering with [Company]?',
        answer: 'Organizations facing growth, change, or strategic uncertainty benefit most — especially teams that value structured thinking and decisive execution.',
      },
      {
        question: 'When is the right time to involve a consultant?',
        answer: 'Typically, when decisions become complex, priorities compete, or internal alignment starts to slow progress, external perspective creates clarity and momentum.',
      },
      {
        question: 'How do we get started?',
        answer: 'You can begin by scheduling an initial conversation to discuss your challenges, goals, and whether our approach is the right fit.',
      },
      {
        question: 'What criteria are used to measure success?',
        answer: 'Success is defined by progress against agreed objectives, improved decision quality, and tangible outcomes across the organization.',
      },
      {
        question: 'What makes your consulting approach different?',
        answer: 'We combine structured thinking with practical execution, focusing on clarity, speed, and measurable business impact.',
      },
    ],
  },
]

function FaqItemComponent({ item, isDark }: { item: FaqItem; isDark: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`w-full pb-5 border-b ${isDark ? 'border-white/20' : 'border-divider-gray'}`}>
      <button
        className="w-full flex justify-between items-start gap-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className={`text-h5 font-medium tracking-tightest leading-[1.3em] ${isDark ? 'text-white' : 'text-near-black'}`}>
          {item.question}
        </span>
        <span className={cn(
          'shrink-0 w-6 h-6 flex items-center justify-center relative transition-transform duration-350',
          isDark ? 'text-white' : 'text-near-black',
          open && 'rotate-45',
        )}>
          <span className="absolute w-[2px] h-[14px] rounded bg-current" />
          <span className="absolute w-[14px] h-[2px] rounded bg-current" />
        </span>
      </button>
      {open && (
        <p className={`mt-3 text-text-body max-w-[95%] ${isDark ? 'text-white/70' : 'text-primary'}`}>
          {item.answer}
        </p>
      )}
    </div>
  )
}

export function FaqSection({
  label = 'FAQ',
  title = 'Common questions',
  description,
  columns = defaultColumns,
  variant = 'default',
}: FaqSectionProps) {
  const isDark = variant === 'dark'

  return (
    <section className={`section ${isDark ? 'dark-bg' : ''}`}>
      <div className="base-container">

        <div className="flex flex-col gap-[2xl] mb-[6xl]">
          {label && <Label variant={isDark ? 'white' : 'bordered'}>{label}</Label>}
          <h2 className={`text-h2 font-medium tracking-tightest leading-[1.1em] max-w-[630px] ${isDark ? 'text-white' : ''}`}>
            {title}
          </h2>
          {description && (
            <p className={`text-text-body max-w-[520px] ${isDark ? 'text-white/70' : 'text-primary'}`}>
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[6xl]">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-5">
              {col.items.map((item, i) => (
                <FaqItemComponent key={i} item={item} isDark={isDark} />
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
