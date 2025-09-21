import Image from 'next/image';

export default function LogoTicker() {
  return (
    <div>
      <div className="mx-8 flex items-center gap-2 py-2">
        <Image src="/images/logo.svg" alt="logo" width={30} height={30} />
        <span className="inline-block">Logoipsum</span>
      </div>
    </div>
  );
}
