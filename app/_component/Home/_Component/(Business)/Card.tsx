import Image from 'next/image';
import { IconType } from 'react-icons';

export type CardProps = {
  Icon: IconType;
  desc: string;
  image: string;
  person: string;
  title: string;
};
export default function Card({ Icon, desc, image, person, title }: CardProps) {
  return (
    <div className="relative rounded-[10px] border border-[#222222] bg-[#0D0D0D80] px-[30px] py-[20px]">
      <div className="flex gap-[5px] py-[10px]">
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </div>
      <p className="py-[10px] text-[#cccccc]">{desc}</p>
      <div className="flex gap-3">
        <Image src={image} alt={person} width={45} height={45} />
        <div>
          <p>{person}</p>
          <p className="text-[#cccccc]">{title}</p>
        </div>
      </div>
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-[200px] w-[200px]"
        style={{
          background:
            'radial-gradient(circle at bottom right, #814AC8, transparent 70%)',
        }}
      />
    </div>
  );
}
