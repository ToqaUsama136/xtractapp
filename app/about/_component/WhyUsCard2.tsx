'use client';
import { ulWhy2 } from '@/_lib/ul-why-us';
import { motion } from 'motion/react';
import LiWhyUs from './LiWhyUs';

export default function WhyUsCard2() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        type: 'spring',
        duration: 2.2,
        delay: 0.4,
        bounce: 0.2,
      }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <div className="relative overflow-hidden rounded-[8px] border border-[#222222] px-[30px] py-[20px]">
        <div className="absolute top-[-120px] left-1/2 z-0 h-[260px] w-[300px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,_#814ac845_40%,_transparent_80%)] blur-md" />
        <p className="py-4 text-[23px]">Xtract AI Automation</p>
        <ul className="space-y-1.5">
          {ulWhy2.map((item, index) => (
            <LiWhyUs key={index} li={item.li} type="ai" />
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
