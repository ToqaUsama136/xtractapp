import TitleCard from '@/app/_component/ui/TitleCard';
import CardTeam from './CardTeam';

export default function OutTeam() {
  return (
    <div>
      <TitleCard
        textButton="Out Team"
        text1="Meet the Minds Behind Xtract"
        text2="We bring together technology and strategy to create smarter automation solutions."
      />

      <div className="mx-[40px] grid grid-cols-1 gap-4 py-[100px] md:grid-cols-3 lg:mx-[250px]">
        <CardTeam />
        <CardTeam />
        <CardTeam />
      </div>
    </div>
  );
}
