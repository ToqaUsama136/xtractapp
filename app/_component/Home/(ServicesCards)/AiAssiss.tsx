import AiAssisCard2 from './AiAssisCard2';
import AiAssistCard1 from './AiAssistCard1';

export default function AiAssiss() {
  return (
    <section className="px-[40px] py-[40px] lg:px-[80px]">
      <div className="flex flex-col items-center justify-center gap-[20px] md:flex-row lg:gap-[80px]">
        <div className="max-w-[450px] flex-1 justify-start">
          <AiAssistCard1 />
        </div>
        <div className="max-w-[450px] flex-1">
          <AiAssisCard2 />
        </div>
      </div>
    </section>
  );
}
