'use client';
import TitleCard from '@/app/_component/ui/TitleCard';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        transition={{
          type: 'spring',
          duration: 1.2,
          delay: 1.4,
          bounce: 0.2,
        }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <TitleCard
          textButton="Contact"
          text1="Get in Touch with Us"
          text2="Have questions or need AI solutions? Let us know by filling out the form, and we’ll be in touch!"
        />
      </motion.div>
    </div>
  );
}
