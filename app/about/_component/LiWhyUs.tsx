import { FaCheck } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

type WhyItemProps = {
  li: string;
  type: 'manual' | 'ai';
};

export default function LiWhyUs({ li, type }: WhyItemProps) {
  return (
    <div>
      <div className="flex items-center gap-2">
        {type === 'manual' ? <FaXmark /> : <FaCheck />}
        <li>{li}</li>
      </div>
    </div>
  );
}
