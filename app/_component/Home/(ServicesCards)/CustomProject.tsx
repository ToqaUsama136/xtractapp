import DescCard from '../../ui/DescCard';
import CustomCard from './CustomCard';

export default function CustomProject() {
  return (
    <section className="px-[40px] py-[40px] lg:px-[80px]">
      <div className="flex flex-col items-center justify-center gap-[20px] md:flex-row lg:gap-[80px]">
        <div className="max-w-[450px] flex-1 justify-start">
          <DescCard
            button1="Custom Projects"
            button2="Startegy"
            button3="Coustom Ai"
            button4="Consulting"
            p1="Build Smarter Systems"
            p2="Whether you're starting from scratch or enhancing an existing system, we offer 
            strategic consulting and develop custom AI projects aligned with your unique goals."
          />
        </div>
        <div className="max-w-[450px] flex-1">
          <CustomCard />
        </div>
      </div>
    </section>
  );
}
