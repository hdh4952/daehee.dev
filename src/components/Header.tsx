import { MdDarkMode } from 'react-icons/md';

export default function Header() {
  return (
    <header className="border-b-gray3 flex h-16 w-full justify-center border-b">
      <div className="flex w-full items-center justify-between lg:w-[1024px]">
        <span className="p-1 text-xl font-bold text-black">daehee.dev</span>
        <MdDarkMode size={24} />
      </div>
    </header>
  );
}
