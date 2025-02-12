import Image from 'next/image';
import Link from 'next/link';

export default function PostCard({
  category,
  title,
  description,
  date,
  slug,
  thumbLink,
}: {
  category: string;
  title: string;
  description: string;
  date: string;
  slug: string;
  thumbLink: string | null;
}) {
  return (
    <div className="mt-8 flex h-40 w-11/12 rounded-2xl border shadow lg:w-[800px]">
      <Link href={`/blog/${category}/${slug}`} className="relative flex h-full w-full flex-col justify-start lg:w-4/5">
        <div className="flex h-16 w-full p-4">
          <div className="flex h-8 w-32 items-center justify-center rounded-lg bg-black3 text-sm font-bold capitalize text-white dark:bg-white dark:text-black3">
            {category}
          </div>
          <div className="flex h-8 w-full items-center justify-start pl-4 text-lg font-bold text-black3 dark:text-white">
            {title}
          </div>
        </div>
        <div className="line-clamp-2 text-ellipsis px-4 text-base font-normal text-black3 dark:text-white">
          {description}
        </div>
        <div className="absolute bottom-4 px-4 text-sm font-normal text-black3 dark:text-white">{date}</div>
      </Link>
      {thumbLink && (
        <Image
          className="hidden h-full w-1/5 rounded-e-2xl lg:block"
          src={thumbLink}
          width={200}
          height={200}
          alt={'thumbnail'}
        />
      )}
    </div>
  );
}
