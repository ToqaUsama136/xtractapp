import { GoDotFill } from 'react-icons/go';
import LogoTicker from '../LogoTicker';

export default function SlidesCard() {
  return (
    <div className="flex w-full flex-col justify-center overflow-hidden py-4 md:w-1/2 md:px-8">
      <div className="ml-[-25px]">
        <LogoTicker />
      </div>
      <div className="mx-2">
        <p className="py-5 text-[30px]">
          {` "AI-powered workflows reduced error rate by 80% in daily operations"`}
        </p>
        <p>
          MedixChain, a healthcare logistics company, was dealing with frequent
          data errors and delays. We introduced AI validation and live tracking
          to improve accuracy and speed across their supply chain.
        </p>
        <p className="pt-5 text-[18px]">impact</p>
        <ul className="p-2">
          <li className="flex items-center gap-2 py-2">
            <GoDotFill />
            80% Error reduction
          </li>
          <li className="flex items-center gap-2 py-2">
            <GoDotFill />
            90% Error reduction
          </li>
          <li className="flex items-center gap-2 py-2">
            <GoDotFill />
            30% Error reduction
          </li>
          <li className="flex items-center gap-2 py-2">
            <GoDotFill />
            60+ Error reduction
          </li>
        </ul>
      </div>
    </div>
  );
}
