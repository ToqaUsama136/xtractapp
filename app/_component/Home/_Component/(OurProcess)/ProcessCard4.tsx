import TittleProcess from '@/app/_component/ui/TittleProcess';
import Card4 from './Card4';

export default function ProcessCard4() {
  return (
    <div className="rounded-[5px] border border-[#222222] bg-[#0D0D0D]">
      <TittleProcess
        p1="step4"
        p2="Continuous Optimization"
        p3="We refine performance, analyze insights, and enhance automation for long-term growth."
      />
      <div className="mx-[4px] my-[20px] border border-[#222222] lg:mx-[40px]">
        <Card4 />
        <Card4 />
        <Card4 />
      </div>
    </div>
  );
}
