import Button from '@/app/_component/ui/Button';
import InputForm from './InputForm';

export default function FormContact() {
  return (
    <div className="my-[40px] rounded-[12px] border border-[#222222]">
      <div className="grid grid-cols-2 gap-[10px]">
        <InputForm type="name" placeholder="jane" label="Frist Name" />
        <InputForm type="name" placeholder="smith" label="Last Name" />
        <InputForm type="Email" placeholder="Jane@mail.com" label="Email" />
        <InputForm type="number" placeholder="+1(969)819-8061" label="Phone" />
      </div>
      <div className="rounded-[4px] border border-[#222222]">
        <label className=""></label>
        <input name="Message" className="" placeholder="Hi, Iam Jane.. " />
      </div>
      <Button text="Submit Form" className="w-full bg-[#814AC9]" />
    </div>
  );
}
