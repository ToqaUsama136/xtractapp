import { FaRobot } from 'react-icons/fa';
import { PiCircleNotch, PiSlidersHorizontalLight } from 'react-icons/pi';

export default function CustomCard() {
  return (
    <div className="rounded-[10px] bg-[#0D0D0D] pt-[40px] md:px-[40px]">
      <div className="rounded-t-[6px] bg-[#000000] px-2 py-4">
        <div>
          <p className="text-[12px]">Hey David!</p>
          <p className="text-[10px]">Here is your Custom project & schedule</p>
        </div>
        <div className="rounded-[10px] border border-[#222222] pt-2">
          <div className="flex items-center">
            <PiSlidersHorizontalLight /> <span>On going project:</span>
          </div>
          <div className="mx-2 my-2 flex items-center rounded-[10px] border border-[#222222] py-2">
            <FaRobot className="mx-2" />
            <div>
              <p className="text-[12px] whitespace-nowrap">
                Customer Support Chatbot
              </p>
              <p className="text-[10px] whitespace-nowrap">90% Finsihed</p>
            </div>
            <PiCircleNotch className="ml-[120px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
