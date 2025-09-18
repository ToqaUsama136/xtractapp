import Button from '../../ui/Button';
import WorkFlowCard1 from './WorkFlowCard1';

export default function WorkFlow() {
  return (
    <section className="px-[20px] py-[40px] lg:px-[80px]">
      <div className="flex flex-col items-center justify-center gap-[20px] md:flex-row lg:gap-[80px]">
        <div className="max-w-[450px] flex-1">
          <WorkFlowCard1 />
        </div>
        <div className="max-w-[450px] flex-1 justify-start">
          <Button
            text={'WorkFlow Automation'}
            className={'border border-[#a3a3a3b0]'}
          />
          <p className="py-2 text-[35px]">Automate repetitive tasks</p>
          <p className="pb-4">
            We help you streamline internal operations by automating manual
            workflows like data entry, reporting, and approval chains saving
            time and cutting down errors.
          </p>
          <Button
            text={'Internal Task Bots'}
            className={'mx-2 border border-[#a3a3a3b0]'}
          />
          <Button
            text={'100+ Automation'}
            className={'border border-[#a3a3a3b0]'}
          />
        </div>
      </div>
    </section>
  );
}
