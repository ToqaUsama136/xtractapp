import { BenefitsCard } from '@/app/_lib/benefits-card';
import Card from './Card';

export default function BenfitsCards() {
  return (
    <div className="mx-[50px] grid grid-cols-1 gap-2 py-[50px] md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:px-[150px]">
      {BenefitsCard.map((items, index) => {
        return (
          <Card
            key={index}
            Icon={items.icon}
            title={items.title}
            desc={items.desc}
          />
        );
      })}
    </div>
  );
}
