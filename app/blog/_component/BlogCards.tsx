'use client';
import Button from '@/app/_component/ui/Button';
import { Blog } from '@/app/_lib/blog';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function BlogCards() {
  return (
    <div className="mx-[20px] pt-6 pb-[120px] lg:mx-[300px]">
      <div className="grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2 md:flex-row">
        {Blog.map((item, index) => (
          <Link href={item.link} key={index}>
            <motion.div
              key={index}
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
              <div className="flex flex-col items-start rounded-[12px] border border-[#222222] bg-[#0d0d0d80] px-8 py-4">
                <motion.img
                  src={item.img}
                  alt={item.btn}
                  className="h-[250px] w-full rounded-lg object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                <Button
                  text={item.btn}
                  className="my-4 border border-[#222222]"
                />
                <p className="text-[23px]">{item.text}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
