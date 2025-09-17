'use client';
import { motion } from 'motion/react';
import { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { MdArrowRightAlt } from 'react-icons/md';

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
  const [Hover, setHover] = useState(false);
  return (
    <>
      <button className={`rounded-[6.4px] px-4 py-2 ${className} `}>
        <motion.p
          className=""
          whileHover={{
            y: [0, -10, 10, 0],
            opacity: [1, 0, 0, 1],
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
        >
          {text}
          {withArrow &&
            (Hover ? (
              <MdArrowRightAlt className="inline-block h-[16px] w-[16px]" />
            ) : (
              <GoArrowUpRight className="inline-block h-[16px] w-[16px]" />
            ))}
        </motion.p>
      </button>
    </>
  );
}
