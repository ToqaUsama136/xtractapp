import Button from '../../ui/Button';

export default function AiAssistCard1() {
  return (
    <div className="px-[80px] lg:px-0">
      <Button text={'Ai Assisstant'} className={'border border-[#a3a3a3b0]'} />
      <p className="py-2 text-[35px]">Build Smarter Systems</p>
      <p className="pb-4">
        Whether you are starting from scratch or enhancing an existing system,
        we offer strategic consulting and develop custom AI projects aligned
        with your unique goals.
      </p>
      <div className="w-[340px]">
        <Button
          text={'Strategy'}
          className={'tex-[12px] border border-[#a3a3a3b0]'}
        />
        <Button
          text={'Custom AI'}
          className={'tex-[12px] mx-2 border border-[#a3a3a3b0]'}
        />
        <Button
          text={'Consulting'}
          className={'tex-[12px] border border-[#a3a3a3b0]'}
        />
      </div>
    </div>
  );
}
