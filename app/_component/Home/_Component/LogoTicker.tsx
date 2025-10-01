import Image from 'next/image';

export default function LogoTicker() {
  return (
    <div>
      <div className="mx-4 flex items-center gap-2 overflow-hidden py-2 lg:mx-8">
        <Image src="/images/logo.svg" alt="logo" width={30} height={30} />
        <span className="inline-block">Logoipsum</span>
      </div>
    </div>
  );
}
