'use client';
import { motion } from 'motion/react';
import { IconType } from 'react-icons';

export type Props = {
  Icon: IconType;
  title: string;
  desc: string;
};
export default function CardValue({ Icon, title, desc }: Props) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          duration: 2.2,
          delay: 0.4,
          bounce: 0.2,
        }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className="relative z-10 overflow-hidden rounded-[12px] border border-[#222222] bg-black px-[30px] py-[20px]">
          <div className="mt-2 mb-4 flex items-center gap-2">
            <Icon className="h-[25px] w-[25px]" />
            <p className="text-[23px]">{title}</p>
          </div>
          <p>{desc}</p>
        </div>
      </motion.div>
    </div>
  );
}
