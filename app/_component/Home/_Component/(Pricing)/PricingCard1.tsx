import Button from '@/app/_component/ui/Button';
import UlPricing from '@/app/_component/ui/UlPricing';
import { PiRocketLaunchFill } from 'react-icons/pi';

type Props = {
  isAnnual: boolean;
  monthlyPrice: string;
  annualPrice: string;
};
export default function PricingCard1({
  isAnnual,
  monthlyPrice,
  annualPrice,
}: Props) {
  const displayPrice = isAnnual ? annualPrice : monthlyPrice;
  return (
    <div className="relative overflow-hidden rounded-[8px] border border-[#222222] px-[30px] py-[20px]">
      <div>
        <div className="flex items-center gap-2 text-[#cccccc]">
          <PiRocketLaunchFill className="h-[25px] w-[25px]" />
          <p className="text-[23px]">Starter</p>
        </div>
        <p className="py-4">
          <span className="text-[30px]">{displayPrice}</span>/months
        </p>
        <p className="py-4">
          Perfect for small businesses starting with AI automation.
        </p>
      </div>
      <Button
        text="Choose this plan"
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
