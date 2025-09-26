import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CallToAction } from '@/payload-types'
import Link from 'next/link'

export default function CTA({ cta }: { cta: CallToAction }) {
  if (!cta) {
    return null
  }
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{cta.heading}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">{cta.subheading}</p>
        {cta.buttons && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {cta.buttons.map((button) => (
              <Link
                href={button.url || '#'}
                key={button.label}
                target={button.target || '_self'}
                className={cn(
                  buttonVariants({
                    variant: button.variant ?? 'secondary',
                  }),
                  button.variant === 'outline'
                    ? 'border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent'
                    : 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
                )}
              >
                {button.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
