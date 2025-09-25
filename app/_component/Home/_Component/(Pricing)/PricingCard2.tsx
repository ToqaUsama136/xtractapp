import Button from '@/app/_component/ui/Button';
import UlPricing from '@/app/_component/ui/UlPricing';
import { FaBoltLightning } from 'react-icons/fa6';

export default function PricingCard2() {
  return (
    <div className="relative overflow-hidden rounded-[8px] border border-[#222222] px-[30px] py-[20px]">
      <div className="absolute bottom-1/2 left-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_center,_#814AC845,_#0d0d0d)]" />
      <div>
        <div className="flex items-center gap-2 text-[#cccccc]">
          <FaBoltLightning className="h-[25px] w-[25px]" />
          <p className="text-[23px]">Professional</p>
          <Button
            text="Popular"
            className="ml-[40px] border border-[#222222] lg:ml-[100px]"
          />
        </div>
        <p className="py-4">
          <span className="text-[30px]">$75</span> /months
        </p>
        <p className="py-4">
          Perfect for small businesses starting with AI automation.
        </p>
      </div>
      <Button
        text="Choose this plan"
        className="w-full border border-[#222222] bg-[#814AC9]"
      />
      <UlPricing
        li1="Basic workflow automation"
        li2="Basic workflow automation"
        li3="Basic workflow automation"
        li4="Basic workflow automation"
        li5="Up to 3 AI integrations"
      />
    </div>
  );
}
