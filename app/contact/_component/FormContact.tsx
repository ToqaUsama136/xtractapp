import Button from '@/app/_component/ui/Button';
import InputForm from './InputForm';

export default function FormContact() {
  return (
    <div className="my-[40px] rounded-[12px] border border-[#222222] md:px-[20px]">
      <div className="grid grid-cols-2 md:gap-[10px]">
        <InputForm type="name" placeholder="jane" label="Frist Name" />
        <InputForm type="name" placeholder="smith" label="Last Name" />
        <InputForm type="Email" placeholder="Jane@mail.com" label="Email" />
        <InputForm type="" placeholder="+1(969)819-8061" label="Phone" />
      </div>
      <div className="mx-4 flex flex-col py-4">
        <label className="py-2">Message</label>
        <textarea
          rows={5}
          name="Message"
          className="rounded-[4px] border border-[#222222] px-2 py-3"
          placeholder="Hi, Iam Jane.. "
        />
        <Button text="Submit Form" className="my-4 w-full bg-[#814AC9]" />
      </div>
    </div>
  );
}
