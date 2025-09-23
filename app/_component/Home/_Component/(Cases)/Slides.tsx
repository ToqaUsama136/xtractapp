'use client';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import SlidesCard from './SlidesCard';
export default function Slides() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 2);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        {current === 0 && (
          <motion.div
            key={current}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mx-[150px] my-[100px] flex flex-col justify-center gap-8 md:flex-row">
              <div>
                <div className="flex w-full justify-center overflow-hidden px-2 py-2 md:w-1/2">
                  <Image
                    src="/images/slide1.png"
                    alt="picture of bag"
                    className="w-full max-w-[550px] rounded-[12px]"
                    height={450}
                    width={550}
                  />
                </div>
                <SlidesCard />
              </div>
            </div>
          </motion.div>
        )}
        {current === 1 && (
          <motion.div
            key={current}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mx-[150px] my-[100px] flex flex-col justify-center gap-8 md:flex-row">
              <div>
                <div className="flex w-full justify-center overflow-hidden px-2 py-2 md:w-1/2">
                  <Image
                    src="/images/slide1.png"
                    alt="picture of bag"
                    className="w-full max-w-[550px] rounded-[12px]"
                    height={450}
                    width={550}
                  />
                </div>
                <SlidesCard />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
