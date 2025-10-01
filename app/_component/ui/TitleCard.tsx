'use client';
import { motion } from 'framer-motion';
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
        className="mx-auto mt-[150px] mb-[100px] flex max-w-[600px] flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.6,
          ease: 'easeOut',
        }}
      >
        <Button text={textButton} className="border border-[#a3a3a3b0]" />
        <p className="py-4 text-center text-[50px] font-bold">{text1}</p>
        <p className="text-center md:text-[18px]">{text2}</p>
      </motion.div>
    </section>
  );
}
