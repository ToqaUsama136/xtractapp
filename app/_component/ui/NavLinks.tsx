'use client';
import { useState } from 'react';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import Button from './Button';
import NavLi from './NavLi';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function NavLinks() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex md:hidden">
        {open && (
          <ul className="absolute top-16 left-10 flex w-full flex-col gap-4 md:hidden">
            {links.map((link) => (
              <NavLi key={link.label} href={link.href} link={link.label} />
            ))}
            <Button
              text={'Book a call'}
              className={'mr-8 bg-[#814AC8]'}
              withArrow
            />
          </ul>
        )}
      </div>

      <button onClick={() => setOpen(!open)} className="md:hidden">
        {open ? (
          <RxCross2 className="h-[31px] w-[31px]" />
        ) : (
          <RxHamburgerMenu className="h-[31px] w-[31px]" />
        )}
      </button>

      <ul className="hidden items-center gap-4 md:flex">
        {links.map((link) => (
          <NavLi key={link.label} href={link.href} link={link.label} />
        ))}
      </ul>
    </>
  );
}
