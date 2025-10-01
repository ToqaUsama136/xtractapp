type Props = {
  Li: string;
  span: string;
};
export default function LiOl({ Li, span }: Props) {
  return (
    <div>
      <li>{Li}</li>
      <span>{span}</span>
    </div>
  );
}
