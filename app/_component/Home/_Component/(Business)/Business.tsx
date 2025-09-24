import TitleCard from '@/app/_component/ui/TitleCard';
import { BusinessCard } from '@/app/_lib/business-card';
import Card from './Card';
export default function Business() {
  return (
    <div>
      <TitleCard
        textButton="Testimonils"
        text1="Why Businesses Love Our AI Solutions"
        text2="Real businesses, real results with AI automation."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:px-[80px] lg:px-[250px]">
        {BusinessCard.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            Icon={item.icons}
            image={item.image}
            desc={item.desc}
            person={item.namePerson}
          />
        ))}
      </div>
    </div>
  );
}
