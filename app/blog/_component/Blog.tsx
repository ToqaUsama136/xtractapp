'use client';
import TitleCard from '@/app/_component/ui/TitleCard';
import { motion } from 'motion/react';

export default function Blog() {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        transition={{
          type: 'spring',
          duration: 2.2,
          delay: 1.4,
          bounce: 0.2,
        }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <TitleCard
          textButton="Blog"
          text1="Unlock AI Insights with Us"
          text2="Stay informed with the latest AI trends, insights, and strategies to drive innovation and business growth."
        />
      </motion.div>
    </div>
  );
}
