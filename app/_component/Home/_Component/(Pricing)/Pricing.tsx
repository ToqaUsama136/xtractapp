'use client';
import TitleCard from '@/app/_component/ui/TitleCard';
import { motion } from 'motion/react';
import { useState } from 'react';
import PricingCard1 from './PricingCard1';
import PricingCard2 from './PricingCard2';
import PricingCard3 from './PricingCard3';
import ToggleButton from './ToggleButton';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <div>
      <TitleCard
        direction="vertical"
        textButton="Pricing"
        text1="The Best AI Automation, at the Right Price"
        text2="Choose a plan that fits your business needs and start automating with AI"
      />
      <div className="mx-[10px] my-[100px] md:mx-[40px] lg:mx-[100px]">
        <ToggleButton isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            duration: 1.2,
            delay: 0.4,
            bounce: 0.2,
          }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="grid grid-cols-1 gap-[35px] px-[20px] py-[20px] md:grid-cols-2 lg:grid-cols-3">
            <PricingCard1
              isAnnual={isAnnual}
              monthlyPrice="$49"
              annualPrice="$37"
            />
            <PricingCard2
              isAnnual={isAnnual}
              monthlyPrice="$99"
              annualPrice="$75"
            />
            <PricingCard3 />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
