type FormProps = {
  label: string;
  type: string;
  placeholder: string;
};
export default function InputForm({ label, type, placeholder }: FormProps) {
  return (
    <div className="mx-4 flex flex-col py-2">
      <label className="py-2">{label}</label>
      <input
        type={type}
        name={label}
        placeholder={placeholder}
        className="rounded-[4px] border border-[#222222] px-2 py-3"
      />
    </div>
  );
}
