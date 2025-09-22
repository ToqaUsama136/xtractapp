import TitleCard from '../ui/TitleCard';
import Process from './_Component/(OurProcess)/Process';
import AiAssiss from './_Component/(ServicesCards)/AiAssiss';
import CustomProject from './_Component/(ServicesCards)/CustomProject';
import SalesMarketing from './_Component/(ServicesCards)/SalesMarketing';
import WorkFlow from './_Component/(ServicesCards)/WorkFlow';
import Hero from './_Component/Hero';
import Logos from './_Component/Logos';

export default function Landing() {
  return (
    <div>
      <Hero />
      <Logos />
      <TitleCard
        textButton="Our Services"
        text1="  AI Solutions That Take Your Business to the Next Level"
        text2=" We design, develop, and implement automation tools that help you work
          smarter, not harder"
      />
      <WorkFlow />
      <AiAssiss />
      <SalesMarketing />
      <CustomProject />
      <Process />
    </div>
  );
}
