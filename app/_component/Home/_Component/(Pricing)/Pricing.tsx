import TitleCard from '@/app/_component/ui/TitleCard';
import PricingCard1 from './PricingCard1';
import PricingCard2 from './PricingCard2';
import PricingCard3 from './PricingCard3';
import ToggleButton from './ToggleButton';

export default function Pricing() {
  return (
    <div>
      <TitleCard
        textButton="Pricing"
        text1="The Best AI Automation, at the Right Price"
        text2="Choose a plan that fits your business needs and start automating with AI"
      />
      <div className="mx-[40px] my-[100px] lg:mx-[100px]">
        <ToggleButton />
        <div className="grid grid-cols-1 gap-[35px] px-[20px] py-[20px] md:grid-cols-2 lg:grid-cols-3">
          <PricingCard1 />
          <PricingCard2 />
          <PricingCard3 />
        </div>
      </div>
    </div>
  );
}
