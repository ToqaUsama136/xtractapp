'use client';
import TitleCard from '@/app/_component/ui/TitleCard';
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
        textButton="Pricing"
        text1="The Best AI Automation, at the Right Price"
        text2="Choose a plan that fits your business needs and start automating with AI"
      />
      <div className="mx-[40px] my-[100px] lg:mx-[100px]">
        <ToggleButton isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
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
      </div>
    </div>
  );
}
