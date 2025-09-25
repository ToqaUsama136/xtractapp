import { CiChat1 } from 'react-icons/ci';
import { PiCircleNotch } from 'react-icons/pi';

export default function Card4() {
  return (
    <div className="m-2 flex items-center gap-2 rounded-[5px] border border-[#222222] px-2 py-1 lg:m-4">
      <span className="flex h-[28px] w-[28px] items-center justify-center rounded-[5px] bg-[#222222]">
        <CiChat1 />
      </span>
      <div className="text-[12px]">
        <p>Chatbot System</p>
        <p>Efficiency will increase by 20%</p>
      </div>
      <PiCircleNotch className="ml-[140px] h-[18px] w-[18px] animate-spin text-[#814AC8]" />
    </div>
  );
}
