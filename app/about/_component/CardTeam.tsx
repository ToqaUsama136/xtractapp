'use client';
import Button from '@/app/_component/ui/Button';
import { motion } from 'motion/react';
import Image from 'next/image';
import { AiOutlineLinkedin } from 'react-icons/ai';

export default function CardTeam() {
  return (
    <div>
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
        <div className="relative flex flex-col rounded-[8px] border border-[#222222] px-[20px] py-[20px]">
          <a
            href="https://www.linkedin.com/in/alex-carter"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <Button text="View In Linkedin" withArrow />
          </a>
          <Image
            src="/images/team1.png"
            alt="person"
            height={320}
            width={300}
            className="rounded-[8px]"
          />
          <div className="flex items-center justify-between px-2 pt-3">
            <p className="text-[23px]">Alex Carter</p>
            <AiOutlineLinkedin className="h-[23px] w-[23px]" />
          </div>
          <p className="px-2">Co Founder & Ai straigest</p>
        </div>
      </motion.div>
    </div>
  );
}
