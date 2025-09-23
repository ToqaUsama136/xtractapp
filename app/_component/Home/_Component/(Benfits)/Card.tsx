import { IconType } from 'react-icons';

type Props = {
  Icon: IconType;
  title: string;
  desc: string;
};
export default function Card({ Icon, title, desc }: Props) {
  return (
    <div className="bg-gradient-radial relative w-[360px] overflow-hidden rounded-[5px] border border-[#222222] px-4 py-4">
      {' '}
      <div
        className="absolute bottom-[-100px] left-1/2 h-[200px] w-[400px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(circle at bottom, #814AC830, transparent 100%)',
        }}
      ></div>
      <Icon className="h-[35px] w-[35px]" />
      <p className="text-[23px]">{title}</p>
      <p className="text-[#ffffffab]">{desc}</p>
    </div>
  );
}
