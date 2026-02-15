import Faqs from '../_component/Home/_Component/(Faqs)/Faqs';
import Logos from '../_component/Home/_Component/Logos';
import TitleCard from '../_component/ui/TitleCard';
import OurValue from './_component/OurValue';
import OutTeam from './_component/OutTeam';
import WhoWeAre from './_component/WhoWeAre';
import WhyUs from './_component/WhyUs';

export default function page() {
  return (
    <div>
      <TitleCard
        textButton="About Us"
        text1="Helping Businesses Grow"
        text2="Xtract helps businesses streamline operations and grow faster with AI-powered automation."
      />
      <Logos />
      <WhoWeAre />
      <OurValue />
      <WhyUs />
      <OutTeam />
      <Faqs />
    </div>
  );
}
