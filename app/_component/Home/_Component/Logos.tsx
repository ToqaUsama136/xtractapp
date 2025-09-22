'use client';
import Ticker from 'framer-motion-ticker';
import LogoTicker from './LogoTicker';

export default function Logos() {
  return (
    <>
      <div className="mx-[100px] my-[100px] flex flex-col items-center justify-center">
        <p className="py-4 text-center">Over 50+ business trust us</p>
        <div className="flex w-[300px] items-center justify-center overflow-hidden md:w-[600px]">
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
