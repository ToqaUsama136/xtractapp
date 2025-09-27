'use client';
import { motion } from 'motion/react';
import Button from '../../ui/Button';
export default function Hero() {
  return (
    <>
      <div className="mx-auto px-[20px] pt-[240px] pb-[100px] md:w-[600px] md:px-[40px] lg:w-[900px]">
        <div className="relative z-50 text-center">
          <motion.div
            className="py-2 text-[30px] md:text-[60px]"
            initial={{ opacity: 0, y: 30, filter: 'blur(30px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              type: 'spring',
              duration: 2.2,
              delay: 1.2,
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
        <div className="relative bottom-[480px] left-[210px] mx-auto">
          <div className="absolute inset-0 z-0 h-[406px] w-[406px] animate-[spin_8s_linear_infinite] rounded-full bg-[linear-gradient(135deg,_#B866E6_0%,_rgba(255,255,255,0)_30%,_rgba(255,255,255,0)_70%,_#894ECC_79%,_#DF7AFE_100%)] opacity-40" />
          <div className="animate-spin-reverse absolute inset-0 top-[60px] left-[80px] z-10 h-[250px] w-[250px] animate-[spin_3s_linear_infinite] rounded-full bg-[linear-gradient(135deg,_#B866E6_0%,_rgba(255,255,255,0)_30%,_rgba(255,255,255,0)_70%,_#894ECC_79%,_#DF7AFE_100%)] opacity-40" />
        </div>
      </div>
    </>
  );
}
