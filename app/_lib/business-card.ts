import { IconType } from 'react-icons';
import { FaStar } from 'react-icons/fa6';

export type CardProps = {
  icons: IconType;
  desc: string;
  image: string;
  namePerson: string;
  title: string;
};

export const BusinessCard: CardProps[] = [
  {
    icons: FaStar,
    desc: 'We provided AI-driven workflow automation, reducing manual tasks and improving efficiency across teams.',
    image: '/images/person.png',
    namePerson: 'David Warner',
    title: 'CEO of Tech Solution',
  },
  {
    icons: FaStar,
    desc: 'We provided AI-driven workflow automation, reducing manual tasks and improving efficiency across teams.',
    image: '/images/person.png',
    namePerson: 'David Warner',
    title: 'CEO of Tech Solution',
  },
  {
    icons: FaStar,
    desc: 'We provided AI-driven workflow automation, reducing manual tasks and improving efficiency across teams.',
    image: '/images/person.png',
    namePerson: 'David Warner',
    title: 'CEO of Tech Solution',
  },
  {
    icons: FaStar,
    desc: 'We provided AI-driven workflow automation, reducing manual tasks and improving efficiency across teams.',
    image: '/images/person.png',
    namePerson: 'David Warner',
    title: 'CEO of Tech Solution',
  },
];
