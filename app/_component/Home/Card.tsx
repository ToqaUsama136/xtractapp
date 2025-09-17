import { CiDollar } from 'react-icons/ci';
import { MdOutlineWatchLater } from 'react-icons/md';
export default function Card() {
  return (
    <div className="flex rounded-[6px] border border-[#a3a3a3b0] px-4">
      <div className="flex items-center px-1">
        <CiDollar className="h-[30px] w-[30px]" />
      </div>
      <div>
        <p>Payroll management</p>
        <p>Due on 2nd july</p>
      </div>
      <div className="ml-26 flex items-center text-[#814AC8]">
        <MdOutlineWatchLater className="h-[30px] w-[30px]" />
      </div>
    </div>
  );
}
