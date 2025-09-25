import TitleCard from '@/app/_component/ui/TitleCard';
import { FaqsCard } from '@/app/_lib/faqs-card';
import Card from '../(Faqs)/Card';
import Cta from './Cta';
export default function Faqs() {
  return (
    <div>
      <TitleCard
        textButton="FAQs"
        text1="We’ve Got the Answers You’re Looking For"
        text2="Quick answers to your AI automation questions."
      />
      <div className="relative md:mx-[80px] lg:mx-[400px]">
        <div className="flex flex-col gap-4 py-4">
          {FaqsCard.map((item, index) => (
            <Card key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
      <div className="py-8 md:px-[100px] lg:px-[420px]">
        <Cta />
      </div>
    </div>
  );
}
