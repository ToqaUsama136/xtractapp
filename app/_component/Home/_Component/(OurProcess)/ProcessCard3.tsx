'use client';
import TittleProcess from '@/app/_component/ui/TittleProcess';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
export default function ProcessCard3() {
  const items = [
    '/images/process1.svg',
    '/images/process2.svg',
    '/images/process3.svg',
    '/images/process4.svg',
    '/images/process5.svg',
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [items.length]);
  return (
    <div className="rounded-[5px] border border-[#222222] bg-[#0D0D0D]">
      <TittleProcess
        p1="step3"
        p2="Seamless Integration"
        p3="We smoothly integrate AI solutions into your existing infrastructure with minimal disruption."
      />
      <div className="mx-[60px] my-[50px] flex justify-between border border-[#222222] px-[50px] py-[30px]">
        <div className="relative h-[74px] w-[74px] rounded-[5px] border border-[#222222]">
          <motion.img
            src="/images/Big circle1.png"
            alt="circle1"
            className="absolute inset-0 top-0 left-0 m-auto h-[64px] w-[64px]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          />

          <motion.img
            src="/images/small circle1.png"
            alt="circle2"
            className="absolute inset-0 top-0 left-0 m-auto h-[40px] w-[40px]"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          />
          <p className="pt-[80px] text-center text-[10px]">Our solution</p>
        </div>
        <div className="mt-5 space-y-4">
          <div className="relative h-[2px] w-[128px] overflow-hidden bg-[#222222]">
            <motion.div
              className="absolute h-[2px] w-[10px] rounded-full bg-[#814AC8]"
              animate={{ x: ['-200%', '1200%'] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>
          <div className="relative h-[2px] w-[128px] overflow-hidden bg-[#222222]">
            <motion.div
              className="absolute h-[2px] w-[10px] rounded-full bg-[#814AC8]"
              animate={{ x: ['-200%', '1200%'] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>
          <div className="relative h-[2px] w-[128px] overflow-hidden bg-[#222222]">
            <motion.div
              className="absolute h-[2px] w-[10px] rounded-full bg-[#814AC8]"
              animate={{ x: ['-200%', '1200%'] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>
        </div>
        <div className="relative h-[74px] w-[74px] rounded-[5px] border border-[#222222]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="absolute top-1 left-1 flex h-[64px] w-[64px] items-center justify-center shadow-lg"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.8 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <Image src={items[index]} alt="logo" width={48} height={48} />
            </motion.div>
          </AnimatePresence>
          <p className="pt-[80px] text-center text-[10px]">Your stack</p>
        </div>
      </div>
    </div>
  );
}
