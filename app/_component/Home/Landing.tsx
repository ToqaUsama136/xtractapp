import TitleCard from '../ui/TitleCard';
import Benfits from './_Component/(Benfits)/Benfits';
import Business from './_Component/(Business)/Business';
import Slides from './_Component/(Cases)/Slides';
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

      <TitleCard
        textButton="Cases Stadius"
        text1="See How Smart AI Automation Transforms Businesses"
        text2="See how AI automation streamlines operations, boosts and drives growth."
      />
      <Slides />
      <Benfits />
      <Business />
    </div>
  );
}
