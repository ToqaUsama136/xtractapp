'use client';
import { ValueCard } from '@/_lib/value-card';
import TitleCard from '@/app/_component/ui/TitleCard';
import CardValue from './CardValue';

export default function OurValue() {
  return (
    <div>
      <TitleCard
        textButton="Our Value"
        text1="The Values Behind Xtract"
        text2="Our values shape everything we do at Xtract. From innovation to integrity, we’re committed to building AI solutions that empower businesses and drive real impact."
      />

      <div className="mx-[40px] my-8 grid grid-cols-1 gap-4 overflow-hidden py-[100px] md:grid-cols-2 lg:mx-[280px]">
        <div className="absolute left-1/2 z-0 my-34 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[radial-gradient(ellipse_at_center,_#814ac940_0%,_transparent_50%)]" />

        {ValueCard.map((item, index) => (
          <CardValue
            key={index}
            title={item.title}
            Icon={item.icons}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}
