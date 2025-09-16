import Button from '../ui/Button';

export default function Hero() {
  return (
    <>
      <div className="mx-auto px-[40px] pt-[180px] pb-[100px] md:w-[900px]">
        <div className="text-center">
          <p className="py-4 text-[70px]">
            Intelligent Automation for Modern Businesses.
          </p>
          <p className="py-4">
            Xtract brings AI automation to your fingertips & streamline tasks.
          </p>
          <Button
            text={'Get in touch'}
            className="mx-2 bg-[#814AC8]"
            withArrow
          />
          <Button text={'View Services'} className="border border-[#575656]" />
        </div>
      </div>
    </>
  );
}
