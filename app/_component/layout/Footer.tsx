import Image from 'next/image';
import Button from '../ui/Button';
import FooterLink from '../ui/FooterLink';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#222222]">
      <div className="absolute -top-1/2 left-1/2 -z-10 flex -translate-x-1/2 justify-center">
        <div className="h-[575px] w-[1200px] rounded-full bg-[radial-gradient(circle,_#814AC830_0%,_rgba(0,0,0,0)_70%)]" />
      </div>
      <div className="grid grid-cols-1 gap-10 px-8 py-[60px] md:grid-cols-2">
        <div className="flex flex-col items-start">
          <div className="flex justify-center gap-2">
            <Image src="/images/logo.svg" alt="logo" width={30} height={30} />
            <p className="text-[30px]">XTRACT</p>
          </div>

          <p className="w-[300px] py-2">
            Xtract – Automate Smarter, Optimize Faster, and Grow Stronger.
          </p>
          <p className="py-2 text-[18px]">Join our newsletter</p>
          <form className="">
            <div className="flex overflow-hidden rounded-[6px] border border-[#222222] p-[6px]">
              <input
                type="email"
                placeholder="name@email.com"
                className="flex-1 bg-transparent px-4 py-2"
              />
              <Button text="Sumbit" className="bg-[#814AC9]" />
            </div>
          </form>
          {/* <form className="flex py-2">
            <input
              type="email"
              placeholder="name@email.com"
              className="rounded-l-md border bg-[#1a1a1a] px-4 py-3 text-white outline-none"
            />
            <button
              type="submit"
              className="rounded-r-md bg-[#814AC8] px-4 py-2 text-sm font-semibold text-white hover:bg-[#6e3ab5]"
            >
              Subscribe
            </button>
          </form> */}
        </div>

        <FooterLink />
      </div>
      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#222222] px-8 py-4 md:flex-row">
        {' '}
        <span>Logo by flaticon</span>
        <span>
          Visioned and Crafted by{' '}
          <strong className="text-white">Kanishk Dubey</strong>
        </span>
        <span>© All right reserved</span>
      </div>
    </footer>
  );
}
