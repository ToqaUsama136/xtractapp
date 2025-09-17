import Button from '../ui/Button';

export default function Services() {
  return (
    <section>
      <div className="mx-auto my-[100px] flex flex-col items-center justify-center md:w-[600px]">
        <Button text={'Our Services'} className="border border-[#a3a3a3b0]" />
        <p className="py-4 text-center text-[30px] md:text-[50px]">
          AI Solutions That Take Your Business to the Next Level
        </p>
        <p className="text-center md:text-[18px]">
          We design, develop, and implement automation tools that help you work
          smarter, not harder
        </p>
      </div>
    </section>
  );
}
