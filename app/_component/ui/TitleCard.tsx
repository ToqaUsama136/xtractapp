'use client';
import { motion } from 'motion/react';
import Button from '../ui/Button';

type CardProps = {
  textButton: string;
  text1: string;
  text2: string;
};
export default function TitleCard({ textButton, text1, text2 }: CardProps) {
  return (
    <section>
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
        <div className="mx-auto my-[50px] flex max-w-[600px] flex-col items-center justify-center">
          <Button text={textButton} className="border border-[#a3a3a3b0]" />
          <p className="py-4 text-center text-[30px] md:text-[50px]">{text1}</p>
          <p className="text-center md:text-[18px]">{text2}</p>
        </div>
      </motion.div>
    </section>
  );
}
