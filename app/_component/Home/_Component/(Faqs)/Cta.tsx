import Button from '@/app/_component/ui/Button';

export default function Cta() {
  return (
    <div className="relative rounded-[10px] border border-[#814Ac820] px-8 py-8 text-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-[#814AC840] via-[#0d0d0d80] to-[#814acb40] blur-sm" />
      <p className="max-w-[700px] text-[50px]">
        Let AI do the Work so you can Scale Faster{' '}
      </p>
      <p className="py-6 text-[18px]">Book a Call Today and Start Automating</p>
      <Button text="Book a free call" className="bg-[#814AC8]" withArrow />
    </div>
  );
}
