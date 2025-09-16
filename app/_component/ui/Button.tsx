'use client';
import { motion } from 'motion/react';
import { MdArrowOutward } from 'react-icons/md';

type PropsButton = {
  className?: string;
  text: string;
  withArrow?: boolean;
};
export default function Button({
  className,
  text,
  withArrow = false,
}: PropsButton) {
  return (
    <>
      <button className={`rounded-[6.4px] px-4 py-2 ${className} `}>
        {text}
        {withArrow && (
          <motion.span
            initial={{ x: 0, y: 0 }}
            whileHover={{ x: 0, y: 6 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            <MdArrowOutward />
          </motion.span>
        )}
      </button>
    </>
  );
}
