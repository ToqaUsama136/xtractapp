'use client';
import { motion } from 'motion/react';
import { IoMdAnalytics } from 'react-icons/io';
import { LuSendHorizontal } from 'react-icons/lu';
import { MdFilePresent } from 'react-icons/md';
import { RiImage2Line } from 'react-icons/ri';
import { Typewriter } from 'react-simple-typewriter';
export default function AiAssisCard2() {
  return (
    <div className="rounded-[10px] bg-[#0D0D0D] px-[50px] pt-[50px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          duration: 2.2,
          delay: 0.4,
          bounce: 0.2,
        }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className="flex flex-col justify-center rounded-[6px] bg-[#000000] px-[40px] py-[40px]">
          <div className="relative mx-auto h-[58px] w-[58px] py-4">
            <motion.img
              src="/images/Big circle1.png"
              alt="circle1"
              className="absolute inset-0 top-0 left-0 m-auto"
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
          </div>
          <div className="py-4 text-center">
            <p className="py-2 font-bold">What can I help with?</p>
            <p className="text-[10px]">
              Weather you want help in customer handling or make changes in your
              system just give me command
            </p>
          </div>

          <div className="rounded-[6px] border border-[#222222] px-4">
            <Typewriter
              words={[
                '  Generate a invoice',
                'Schedule a 30 day content',
                'Provide me full report',
              ]}
              loop={true}
              cursor
            />
            <LuSendHorizontal className="-mt-4 ml-[220px] text-[#814AC8]" />
            <div className="py-2 text-[12px]">
              <span className="rounded-[16px] border border-[#222222] px-1">
                <span className="text-[#814AC8]">+</span>
                Add documents
              </span>
            </div>
          </div>

          <div className="flex py-4">
            <div className="inline-block rounded-[16px] border border-[#222222] px-1 text-[12px]">
              <IoMdAnalytics className="inline-block text-[#814AC8]" />
              <span>Analayze</span>
            </div>
            <div className="mx-2 rounded-[16px] border border-[#222222] px-1 text-[12px]">
              <RiImage2Line className="inline-block text-[#814AC8]" />
              <span>Generate Image</span>
            </div>
            <div className="hidden rounded-[16px] border border-[#222222] px-1 text-[12px] md:block">
              <MdFilePresent className="inline-block text-[#814AC8]" />
              <span>research</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
