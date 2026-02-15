import TitleCard from '@/app/_component/ui/TitleCard';
import WhyUsCard1 from './WhyUsCard1';
import WhyUsCard2 from './WhyUsCard2';

export default function WhyUs() {
  return (
    <div>
      <TitleCard
        textButton="Why Us"
        text1="What makes us stand out in the industry"
        text2="Discover how our innovative strategies, data-driven approach, and commitment to results set us apart from the competition"
      />
      <div className="grid-col-1 mx-[20px] grid items-center gap-[20px] py-[40px] md:mx-[50px] lg:mx-[350px] lg:grid-cols-2">
        <WhyUsCard1 />
        <WhyUsCard2 />
      </div>
    </div>
  );
}
