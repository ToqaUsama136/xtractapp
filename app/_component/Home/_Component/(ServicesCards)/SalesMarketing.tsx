'use client';
import DescCard from '../../../ui/DescCard';
import SalesCard from './SalesCard';

export default function SalesMarketing() {
  return (
    <section className="px-[40px] py-[40px] lg:px-[80px]">
      <div className="flex flex-col items-center justify-center gap-[20px] md:flex-row lg:gap-[80px]">
        <div className="max-w-[450px] flex-1">
          <SalesCard />
        </div>
        <div className="max-w-[450px] flex-1 justify-start">
          <DescCard
            button1="Sales & Marketing"
            button2="Leads"
            button3="Content"
            button4="Social Post"
            p1="Accelerate Sales Growth"
            p2="AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts and builds stronger brand presence."
          />
        </div>
      </div>
    </section>
  );
}
