import TitleCard from '../ui/TitleCard';
import AiAssiss from './(ServicesCards)/AiAssiss';
import WorkFlow from './(ServicesCards)/WorkFlow';
import Hero from './Hero';
import Logos from './Logos';

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
    </div>
  );
}
