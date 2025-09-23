'use client';
import Ticker from 'framer-motion-ticker';
import LogoTicker from './LogoTicker';

export default function Logos() {
  return (
    <>
      <div className="mx-[40px] my-[100px] flex flex-col items-center justify-center lg:mx-[100px]">
        <p className="py-4 text-center">Over 50+ business trust us</p>
        <div className="flex w-[400px] items-center justify-center overflow-hidden md:w-[600px]">
          <Ticker duration={20}>
            <LogoTicker />
            <LogoTicker />
            <LogoTicker />
            <LogoTicker />
          </Ticker>
        </div>
      </div>
    </>
  );
}
