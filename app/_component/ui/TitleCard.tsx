'use client';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

type CardProps = {
  textButton: string;
  text1: string;
  text2: string;
  direction?: 'horizontal' | 'vertical';
};
export default function TitleCard({
  textButton,
  text1,
  text2,
  direction,
}: CardProps) {
  return (
    <section>
      <motion.div
        className="mx-[20px] mt-[150px] mb-[100px] flex max-w-[600px] flex-col items-center justify-center md:mx-auto"
        initial={{
          opacity: 0,
          x: direction === 'horizontal' ? -30 : 0,
          y: direction === 'vertical' ? 30 : 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          duration: 2.2,
          delay: 0.4,
          bounce: 0.2,
        }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <Button text={textButton} className="border border-[#a3a3a3b0]" />
        <p className="py-4 text-center text-[50px]">{text1}</p>
        <p className="text-center md:text-[18px]">{text2}</p>
      </motion.div>
    </section>
  );
}
