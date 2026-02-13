'use client';
import TitleCard from '@/app/_component/ui/TitleCard';
import { businessCard } from '@/app/_lib/business-card';
import { motion } from 'motion/react';
import Card from './Card';
export default function Business() {
  return (
    <div>
      <TitleCard
        direction="vertical"
        textButton="Testimonils"
        text1="Why Businesses Love Our AI Solutions"
        text2="Real businesses, real results with AI automation."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:px-[80px] lg:px-[250px]">
        {businessCard.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              duration: 1.2,
              delay: index * 0.2,
              bounce: 0.2,
            }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Card
              title={item.title}
              Icon={item.icons}
              image={item.image}
              desc={item.desc}
              person={item.namePerson}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
