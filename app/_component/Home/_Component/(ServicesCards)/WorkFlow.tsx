import DescTitle from '../../../ui/DescCard';
import WorkFlowCard1 from './WorkFlowCard1';

export default function WorkFlow() {
  return (
    <section className="px-[20px] py-[40px] lg:px-[80px]">
      <div className="flex flex-col items-center justify-center gap-[20px] md:flex-row lg:gap-[80px]">
        <div className="max-w-[450px] flex-1">
          <WorkFlowCard1 />
        </div>

        <div className="max-w-[450px] flex-1 justify-start">
          <DescTitle
            button1="WorkFlow Automation"
            button2="Internal Task Bots"
            button3="100+ Automation"
            p1="Automate repetitive tasks"
            p2=" We help you streamline internal operations by automating manual
            workflows like data entry, reporting, and approval chains saving
            time and cutting down errors."
          />
        </div>
      </div>
    </section>
  );
}
