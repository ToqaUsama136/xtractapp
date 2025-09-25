import TitleCard from '@/app/_component/ui/TitleCard';
import ProcessCard1 from './ProcessCard1';
import ProcessCard2 from './ProcessCard2';
import ProcessCard3 from './ProcessCard3';
import ProcessCard4 from './ProcessCard4';

export default function Process() {
  return (
    <div>
      <TitleCard
        text1="Our Simple, Smart, and Scalable Process"
        text2="We design, develop, and implement automation tools that help you work smarter, not harder"
        textButton="Our Process"
      />

      <div className="mx-[40px] my-[100px] grid grid-cols-1 gap-4 md:grid-cols-2 lg:mx-[250px] lg:gap-8">
        <ProcessCard1 />
        <ProcessCard2 />
        <ProcessCard3 />
        <ProcessCard4 />
      </div>
    </div>
  );
}
