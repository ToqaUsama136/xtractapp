type Props = {
  Li: string;
};
export default function LiUl({ Li }: Props) {
  return (
    <div className="flex gap-8">
      <div className="mt-2 h-[8px] w-[8px] rounded-full bg-white" />
      <li className="text-[18px]">{Li}</li>
    </div>
  );
}
