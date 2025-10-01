'use client';
import TitleCard from '@/app/_component/ui/TitleCard';
import { faqsCard } from '@/app/_lib/faqs-card';
import { motion } from 'motion/react';
import Card from '../(Faqs)/Card';
import Cta from './Cta';
export default function Faqs() {
  return (
    <div>
      <TitleCard
        direction="vertical"
        textButton="FAQs"
        text1="We’ve Got the Answers You’re Looking For"
        text2="Quick answers to your AI automation questions."
      />
      <div className="relative mx-[40px] md:mx-[80px] lg:mx-[400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            duration: 1.2,
            delay: 0.4,
            bounce: 0.2,
          }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="flex flex-col gap-4 py-4">
            {faqsCard.map((item, index) => (
              <Card key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </motion.div>
      </div>
      <div className="mx-[40px] py-8 md:px-[100px] lg:px-[420px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            duration: 1.2,
            delay: 0.4,
            bounce: 0.2,
          }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Cta />
        </motion.div>
      </div>
    </div>
  );
}
