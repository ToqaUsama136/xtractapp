'use client';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Button from '../../ui/Button';
export default function Hero() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="mx-auto px-[20px] md:w-[600px] md:px-[40px] lg:w-[900px]">
        <div className="z-50 -my-[200px] flex h-screen items-center justify-center">
          <motion.div
            initial={{ width: 60, height: 30 }}
            animate={
              open
                ? {
                    width: 'auto',
                    height: 'auto',
                    paddingLeft: 10,
                    paddingRight: 10,
                  }
                : { width: 60, height: 30 }
            }
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="flex items-center gap-2 overflow-hidden rounded-full bg-black text-white"
          >
            <div className="flex items-center justify-center rounded-full border border-[#222222] bg-[#814AC9] px-3 py-1">
              New
            </div>

            {open && (
              <span className="whitespace-nowrap">
                Automated Lead Generation
              </span>
            )}
          </motion.div>
        </div>

        <div className="relative z-50 text-center">
          <motion.div
            className="py-2 text-[50px] md:text-[60px]"
            initial={{ opacity: 0, y: 30, filter: 'blur(30px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              type: 'spring',
              delay: 1.2,
              duration: 0.6,
              ease: 'easeOut',
              bounce: 0.2,
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            Intelligent Automation for Modern Businesses.
          </motion.div>
          <motion.p
            className="py-2"
            initial={{ opacity: 0, y: 30, filter: 'blur(30px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              type: 'spring',
              duration: 2.2,
              delay: 1.4,
              bounce: 0.2,
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            Xtract brings AI automation to your fingertips & streamline tasks.
          </motion.p>

          <Button
            text={'Get in touch'}
            className="mx-2 my-4 bg-[#814AC8]"
            withArrow
          />
          <Button
            text={'View Services'}
            className="my-4 border border-[#a3a3a3b0]"
          />
        </div>
        <div className="relative bottom-[400px] left-[40px] mx-auto md:bottom-[480px] md:left-[100px] lg:left-[210px]">
          <div className="absolute inset-0 z-0 h-[300px] w-[300px] animate-[spin_8s_linear_infinite] rounded-full bg-[linear-gradient(135deg,_#B866E6_0%,_rgba(255,255,255,0)_30%,_rgba(255,255,255,0)_70%,_#894ECC_79%,_#DF7AFE_100%)] md:h-[406px] md:w-[406px]" />
          <div className="animate-spin-reverse absolute inset-0 top-[60px] left-[80px] z-10 h-[150px] w-[150px] animate-[spin_3s_linear_infinite] rounded-full bg-[linear-gradient(135deg,_#B866E6_0%,_rgba(255,255,255,0)_30%,_rgba(255,255,255,0)_70%,_#894ECC_79%,_#DF7AFE_100%)] md:h-[250px] md:w-[250px]" />
        </div>
      </div>
    </>
  );
}
