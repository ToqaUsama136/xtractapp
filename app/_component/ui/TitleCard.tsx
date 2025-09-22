'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';

type CardProps = {
  textButton: string;
  text1: string;
  text2: string;
};
export default function TitleCard({ textButton, text1, text2 }: CardProps) {
  const [showMotion, setShowMotion] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowMotion(false), 8000);
    return () => clearTimeout(timer);
  }, []);
  const Wrapper = showMotion ? motion.div : 'div';
  return (
    <section>
      <Wrapper
        className="mx-auto mt-[150px] mb-[100px] flex max-w-[600px] flex-col items-center justify-center"
        {...(showMotion && {
          initial: { opacity: 0, y: 0 },
          animate: { opacity: 1, y: -50 },
          transition: { duration: 1 },
        })}
      >
        <Button text={textButton} className="border border-[#a3a3a3b0]" />
        <p className="py-4 text-center text-[30px] md:text-[50px]">{text1}</p>
        <p className="text-center md:text-[18px]">{text2}</p>
      </Wrapper>
    </section>
  );
}
