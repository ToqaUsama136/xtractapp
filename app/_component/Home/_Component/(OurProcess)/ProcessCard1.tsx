import TittleProcess from '@/app/_component/ui/TittleProcess';
import { IoShieldOutline } from 'react-icons/io5';

export default function ProcessCard1() {
  return (
    <div className="rounded-[5px] border border-[#222222] bg-[#0D0D0D]">
      <TittleProcess
        p1="step1"
        p2="Smart Analyzing"
        p3="We assess your needs and identify AI solutions to streamline workflows and improve efficiency."
      />
      <div className="mx-[10px] flex justify-center gap-2 py-[20px] lg:mx-[30px]">
        <div className="flex w-full flex-col items-center justify-center border border-[#222222] px-4">
          <div className="relative h-[101px] w-[101px] animate-[spin_6s_linear_infinite] rounded-full border border-[#222222] bg-[conic-gradient(from_0deg,_#814AC8_0deg_35deg,_#814AC800_20deg_360deg)]" />
          <p className="py-4 text-[12px]">Analyzing current workflow..</p>
        </div>
        <div className="flex w-full flex-col items-start gap-2 border border-[#222222] px-2 py-2">
          <span className="flex w-full items-center gap-2 border border-[#222222] px-2">
            <IoShieldOutline />
            System Check
          </span>
          <span className="flex w-full items-center gap-2 border border-[#222222] px-2">
            <IoShieldOutline /> System Check
          </span>
          <span className="flex w-full items-center gap-2 border border-[#222222] px-2">
            <IoShieldOutline /> System Check
          </span>
          <span className="flex w-full items-center gap-2 border border-[#222222] px-2">
            <IoShieldOutline /> System Check
          </span>
          <span className="flex w-full items-center gap-2 border border-[#222222] px-2">
            <IoShieldOutline /> System Check
          </span>
        </div>
      </div>
    </div>
  );
}
