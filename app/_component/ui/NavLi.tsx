import Link from 'next/link';

type Props = {
  href: string;
  link: string;
};
export default function NavLi({ href, link }: Props) {
  return (
    <>
      <li className="mx-auto w-full">
        <Link href={href}>{link}</Link>
      </li>
    </>
  );
}
