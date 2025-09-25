import { FaCheck } from 'react-icons/fa6';

type UiProps = {
  li1: string;
  li2: string;
  li3: string;
  li4: string;
  li5: string;
};
export default function UlPricing({ li1, li2, li3, li4, li5 }: UiProps) {
  return (
    <div className="py-4">
      <p>{`What's Included:`}</p>
      <ul className="space-y-2 py-2">
        <li className="flex items-center gap-2">
          <FaCheck /> <p>{li1}</p>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck /> <p>{li2}</p>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck />
          <p>{li3}</p>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck />
          <p>{li4}</p>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck />
          <p>{li5}</p>
        </li>
      </ul>
    </div>
  );
}
