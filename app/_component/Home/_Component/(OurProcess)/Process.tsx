'use client';
import TitleCard from '@/app/_component/ui/TitleCard';
import { motion } from 'motion/react';
import ProcessCard1 from './ProcessCard1';
import ProcessCard2 from './ProcessCard2';
import ProcessCard3 from './ProcessCard3';
import ProcessCard4 from './ProcessCard4';

export default function Process() {
  return (
    <div>
      <TitleCard
        direction="vertical"
        text1="Our Simple, Smart, and Scalable Process"
        text2="We design, develop, and implement automation tools that help you work smarter, not harder"
        textButton="Our Process"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          duration: 1.2,
          delay: 0.4,
          bounce: 0.2,
        }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className="mx-[40px] my-[100px] grid grid-cols-1 gap-4 md:grid-cols-2 lg:mx-[250px] lg:gap-8">
          <ProcessCard1 />
          <ProcessCard2 />
          <ProcessCard3 />
          <ProcessCard4 />
        </div>
      </motion.div>
    </div>
  );
}
