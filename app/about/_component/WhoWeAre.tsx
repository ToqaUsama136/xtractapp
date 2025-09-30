'use client';
import { whoAre } from '@/_lib/who-we-are';
import TitleCard from '@/app/_component/ui/TitleCard';
import Card from './Card';
export default function WhoWeAre() {
  return (
    <div>
      <TitleCard
        textButton="Who We Are"
        text1="Who We Are"
        text2="Xtract is a team of innovators dedicated to making AI automation simple and effective. We help businesses streamline workflows, boost efficiency, and scale with smart, AI-driven solutions."
      />
      <div className="mx-[40px] mb-8 grid grid-cols-1 gap-4 py-[100px] md:grid-cols-2 lg:mx-[280px] lg:grid-cols-3">
        {whoAre.map((item, index) => (
          <Card
            key={index}
            Icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}
