import Button from './Button';

type Props = {
  button1: string;
  p1: string;
  p2: string;
  button2: string;
  button3: string;
  button4?: string;
};
export default function DescCard({
  button1,
  p1,
  p2,
  button2,
  button3,
  button4,
}: Props) {
  return (
    <div className="px-[80px] lg:px-0">
      <Button text={button1} className={'border border-[#a3a3a3b0]'} />
      <p className="py-2 text-[35px]">{p1}</p>
      <p className="pb-4">{p2}</p>
      <div className="w-[340px]">
        <Button
          text={button2}
          className={'tex-[12px] border border-[#a3a3a3b0]'}
        />
        <Button
          text={button3}
          className={'tex-[12px] mx-2 border border-[#a3a3a3b0]'}
        />
        {button4 && (
          <Button
            text={button4}
            className={'tex-[12px] border border-[#a3a3a3b0]'}
          />
        )}
      </div>
    </div>
  );
}
