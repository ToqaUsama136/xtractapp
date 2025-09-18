import Image from 'next/image';

export default function CardSale() {
  return (
    <div className="rounded-[5px] border border-[#a3a3a3b0] px-4 text-[12px]">
      <div className="my-4 flex">
        <div>
          <Image src="/images/Graphic.svg" alt="user" width={24} height={24} />
        </div>
        <div className="mx-2 -mt-2 pl-2">
          <p>Jack Dainel</p>
          <p>Founder</p>
        </div>

        <p className="ml-[140px] rounded-[20px]">verified</p>
      </div>
      <div className="-mt-2 flex py-2">
        <div className="">
          <p>E-mail</p>
          <p>justin@main.com</p>
        </div>
        <div className="ml-12">
          <p>Company</p>
          <p>Xiavier LLC</p>
        </div>
      </div>
    </div>
  );
}
