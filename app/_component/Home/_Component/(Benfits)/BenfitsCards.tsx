'use client';
import { benefitsCard } from '@/app/_lib/benefits-card';
import { motion } from 'motion/react';
import Card from './Card';

export default function BenfitsCards() {
  return (
    <div className="mx-[30px] grid grid-cols-1 gap-2 py-[50px] md:mx-[50px] md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:px-[150px]">
      {benefitsCard.map((items, index) => (
        <motion.div
          key={index}
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
          <Card Icon={items.icon} title={items.title} desc={items.desc} />
        </motion.div>
      ))}
    </div>
  );
}
