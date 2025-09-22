type Props = {
  p1: string;
  p2: string;
  p3: string;
};
export default function TittleProcess({ p1, p2, p3 }: Props) {
  return (
    <div className="px-[30px] py-[10px]">
      <p className="inline-block rounded-[5px] border border-[#222222] px-2 py-1 text-[12px]">
        {p1}
      </p>
      <p className="text-[23px]">{p2}</p>
      <p className="w-[380px]">{p3}</p>
    </div>
  );
}
