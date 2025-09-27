'use client'

import AnimatedDividerBar from '@/components/divide-bar'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { PageSection } from '@/payload-types'
import { motion } from 'motion/react'

const FaqSection = ({ section }: { section: PageSection }) => {
  return (
    <div className="pb-20 px-4">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedDividerBar color="bg-[#2356a3]" maxHeight={70} />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{section.heading}</h2>
          {section.subheading && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{section.subheading}</p>
          )}
        </motion.div>

        {section.faqs && section.faqs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {section.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#2356a3] transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default FaqSection
