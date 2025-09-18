import DescTitle from '../../ui/DescCard';
import AiAssisCard2 from './AiAssisCard2';

export default function AiAssiss() {
  return (
    <section className="px-[40px] py-[40px] lg:px-[80px]">
      <div className="flex flex-col items-center justify-center gap-[20px] md:flex-row lg:gap-[80px]">
        <div className="max-w-[450px] flex-1 justify-start">
          <DescTitle
            button1="Ai Assisstant"
            button2="Strategy"
            button3="Custom AI"
            button4="Consulting"
            p1="Build Smarter Systems"
            p2=" Whether you are starting from scratch or enhancing an existing system,
        we offer strategic consulting and develop custom AI projects aligned
        with your unique goals."
          />
        </div>
        <div className="max-w-[450px] flex-1">
          <AiAssisCard2 />
        </div>
      </div>
    </section>
  );
}
