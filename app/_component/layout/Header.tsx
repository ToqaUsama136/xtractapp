import Image from 'next/image';
import NavLinks from '../ui/NavLinks';

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between px-[40px] py-[10px] md:h-[65px]">
        <div className="flex justify-center gap-2">
          <Image src="/images/logo.svg" alt="logo" width={30} height={30} />
          <p className="text-[21px]">XTRACT</p>
        </div>

        <div className="md:hidden">
          <NavLinks />
        </div>

        <div className="hidden justify-end md:flex">
          <NavLinks />
          <button className="mx-4 rounded-[5px] bg-[#814AC8] px-2 py-1">
            Book a call
          </button>
        </div>
      </div>
    </header>
  );
}
