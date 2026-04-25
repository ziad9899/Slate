import { Mail, MessageSquare, MapPin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Section } from '@/types/section'
import { useTranslation } from '@/i18n/useTranslation'
import type { TranslationKey } from '@/i18n/translations'
import { deriveSectionPalette } from './sectionPalette'

type Palette = ReturnType<typeof deriveSectionPalette>

export function ContactSection({ section }: { section: Section }) {
  const { t } = useTranslation()
  const p = deriveSectionPalette(section.style)
  const { content } = section

  return (
    <section
      className="px-8 py-24 sm:px-12 sm:py-28"
      style={{ backgroundColor: p.bg, color: p.text }}
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div>
            <h2
              className="text-balance text-3xl font-semibold tracking-tight-2 sm:text-4xl"
              style={{ color: p.text }}
            >
              {content.title}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed" style={{ color: p.textMuted }}>
              {content.description}
            </p>
          </div>

          <ul className="space-y-4">
            <ContactRow
              icon={Mail}
              label={t('section.contact.email.label')}
              value={t('section.contact.email.value')}
              ltrValue
              palette={p}
            />
            <ContactRow
              icon={MessageSquare}
              label={t('section.contact.chat.label')}
              value={t('section.contact.chat.value')}
              palette={p}
            />
            <ContactRow
              icon={MapPin}
              label={t('section.contact.office.label')}
              value={t('section.contact.office.value')}
              palette={p}
            />
          </ul>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-xl p-6 sm:p-8"
          style={{
            backgroundColor: p.surface,
            border: `1px solid ${p.border}`,
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              labelKey="section.contact.form.firstName"
              placeholderKey="section.contact.form.firstNamePlaceholder"
              palette={p}
            />
            <Field
              labelKey="section.contact.form.lastName"
              placeholderKey="section.contact.form.lastNamePlaceholder"
              palette={p}
            />
          </div>
          <div className="mt-4">
            <Field
              labelKey="section.contact.form.email"
              placeholderKey="section.contact.form.emailPlaceholder"
              type="email"
              ltrInput
              palette={p}
            />
          </div>
          <div className="mt-4">
            <FieldArea
              labelKey="section.contact.form.message"
              placeholderKey="section.contact.form.messagePlaceholder"
              palette={p}
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg py-2.5 text-sm font-medium transition active:scale-[0.99]"
            style={{ backgroundColor: p.primary, color: p.buttonText }}
          >
            {content.buttonText}
          </button>
        </form>
      </div>
    </section>
  )
}

function ContactRow({
  icon: Icon,
  label,
  value,
  ltrValue = false,
  palette: p,
}: {
  icon: LucideIcon
  label: string
  value: string
  ltrValue?: boolean
  palette: Palette
}) {
  return (
    <li className="flex items-start gap-3">
      <div
        className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg"
        style={{
          backgroundColor: p.surface,
          border: `1px solid ${p.border}`,
          color: p.primary,
        }}
      >
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: p.textFaint }}>
          {label}
        </div>
        <div className="mt-0.5 text-sm" style={{ color: p.text }} dir={ltrValue ? 'ltr' : undefined}>
          {value}
        </div>
      </div>
    </li>
  )
}

function Field({
  labelKey,
  placeholderKey,
  type = 'text',
  ltrInput = false,
  palette: p,
}: {
  labelKey: TranslationKey
  placeholderKey: TranslationKey
  type?: string
  ltrInput?: boolean
  palette: Palette
}) {
  const { t } = useTranslation()
  return (
    <label className="block">
      <span className="text-[11px] font-medium uppercase tracking-wider" style={{ color: p.textFaint }}>
        {t(labelKey)}
      </span>
      <input
        type={type}
        placeholder={t(placeholderKey)}
        dir={ltrInput ? 'ltr' : undefined}
        className="mt-1.5 w-full rounded-lg px-3 py-2.5 text-sm outline-none transition"
        style={{
          backgroundColor: p.bg,
          border: `1px solid ${p.border}`,
          color: p.text,
        }}
      />
    </label>
  )
}

function FieldArea({
  labelKey,
  placeholderKey,
  palette: p,
}: {
  labelKey: TranslationKey
  placeholderKey: TranslationKey
  palette: Palette
}) {
  const { t } = useTranslation()
  return (
    <label className="block">
      <span className="text-[11px] font-medium uppercase tracking-wider" style={{ color: p.textFaint }}>
        {t(labelKey)}
      </span>
      <textarea
        rows={4}
        placeholder={t(placeholderKey)}
        className="mt-1.5 w-full resize-none rounded-lg px-3 py-2.5 text-sm leading-relaxed outline-none transition"
        style={{
          backgroundColor: p.bg,
          border: `1px solid ${p.border}`,
          color: p.text,
        }}
      />
    </label>
  )
}
