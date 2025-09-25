import TitleCard from '@/app/_component/ui/TitleCard';
import BenfitsCards from './BenfitsCards';

export default function Benfits() {
  return (
    <div>
      <TitleCard
        text1="The Key Benefits of AI  for Your Business Growth"
        text2="Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes."
        textButton="Benefits"
      />
      <BenfitsCards />
    </div>
  );
}
