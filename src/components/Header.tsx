import Link from 'next/link';
import { MdDarkMode } from 'react-icons/md';

export default function Header() {
  return (
    <header className="fixed top-0 flex h-16 w-full justify-center border-b border-b-gray3 bg-white">
      <div className="flex w-full items-center justify-between px-4 lg:w-[1024px]">
        <Link href={'/blog'}>
          <span className="p-1 text-xl font-bold text-black">daehee.dev</span>
        </Link>
        <MdDarkMode size={24} />
      </div>
    </header>
  );
}
