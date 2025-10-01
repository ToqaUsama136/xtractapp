import Button from '@/app/_component/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

type Props = {
  H1: string;
  DescH1: string;
  Src: string;
  H2: string;
  DescH2: string;
};
export default function Content({ H1, DescH1, Src, H2, DescH2 }: Props) {
  return (
    <div>
      <Link href="/blog">
        <div className="flex items-center py-4">
          <FaArrowLeft />
          <Button text="Go back" />
        </div>
      </Link>
      <div className="flex gap-4">
        <Button text="Article" className="border border-[#222222]" />
        <Button text="Mar11,2025" className="border border-[#222222]" />
      </div>
      <div>
        <p className="py-2 text-[35px] font-bold md:text-[50px] lg:text-[70px]">
          {H1}
        </p>
        <p className="text-[20px]">{DescH1}</p>

        <Image
          src={Src}
          alt="img"
          width={1000}
          height={400}
          className="pb-8 md:-mt-16"
        />
      </div>
      <div className="py-4">
        <p className="py-2 text-[50px] font-bold">{H2}</p>
        <p className="text-[18px]">{DescH2}</p>
      </div>
    </div>
  );
}
