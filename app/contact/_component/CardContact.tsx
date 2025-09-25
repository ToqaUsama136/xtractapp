'use client';
import { motion } from 'motion/react';
import { AiTwotoneMail } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import FormContact from './FormContact';
export default function CardContact() {
  return (
    <div className="mx-[300] py-[80px]">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{
          type: 'spring',
          duration: 2.2,
          delay: 1.4,
          bounce: 0.2,
        }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className="flex justify-center gap-6">
          <div className="relative w-1/2 overflow-hidden rounded-[8px] border border-[#222222] px-8 py-8">
            <div className="flex items-center gap-2">
              {' '}
              <AiTwotoneMail className="h-[25px] w-[25px]" />
              <p className="tex-[18px]">E-mail</p>
            </div>
            <p className="py-2">Admin@Xtract.com</p>
            <div className="absolute right-0 bottom-0 z-0 h-[250px] w-[250px] translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_bottom_right,_#814AC8,_transparent_70%)]" />
          </div>
          <div className="relative w-1/2 overflow-hidden rounded-[8px] border border-[#222222] px-8 py-8">
            <div className="flex items-center gap-2">
              <FaPhoneAlt /> <p className="tex-[18px]">Phone</p>
            </div>
            <p className="py-2">+1(969) 819-8061</p>
            <div className="absolute right-0 bottom-0 z-0 h-[250px] w-[250px] translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_bottom_right,_#814AC8,_transparent_70%)]" />
          </div>
        </div>
        <FormContact />
      </motion.div>
    </div>
  );
}
