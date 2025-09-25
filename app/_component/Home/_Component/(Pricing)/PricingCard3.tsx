import Button from '@/app/_component/ui/Button';
import UlPricing from '@/app/_component/ui/UlPricing';
import { PiCrownSimpleFill } from 'react-icons/pi';

export default function PricingCard3() {
  return (
    <div className="relative overflow-hidden rounded-[8px] border border-[#222222] px-[30px] py-[20px] md:col-span-2 lg:col-span-1">
      <div>
        <div className="flex items-center gap-2 text-[#cccccc]">
          <PiCrownSimpleFill className="h-[25px] w-[25px]" />
          <p className="text-[23px]">EnterPrice</p>
        </div>
        <p className="py-4 text-[30px]">Custom</p>
        <p className="py-4">
          Perfect for small businesses starting with AI automation.
        </p>
      </div>
      <Button
        text="Schedule a call"
        className="w-full border border-[#222222]"
      />
      <UlPricing
        li1="Basic workflow automation"
        li2="Basic workflow automation"
        li3="Basic workflow automation"
        li4="Basic workflow automation"
        li5="Up to 3 AI integrations"
      />
      <div className="absolute top-1/2 left-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_center,_#814AC845,_#0d0d0d)]" />
    </div>
  );
}
