'use client';
import { ulWhy1 } from '@/_lib/ul-why-us';
import { motion } from 'motion/react';
import LiWhyUs from './LiWhyUs';

export default function WhyUsCard1() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        type: 'spring',
        duration: 2.2,
        delay: 0.4,
        bounce: 0.2,
      }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <div className="rounded-[8px] border border-[#222222] px-[30px] py-[20px]">
        <p className="py-4 text-[23px]">Manual Work</p>
        <ul className="space-y-1.5">
          {ulWhy1.map((item, index) => (
            <LiWhyUs key={index} li={item.li} type="manual" />
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
