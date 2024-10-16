import Link from 'next/link';

export default function PostCard({
  category,
  title,
  description,
  date,
  slug,
}: {
  category: string;
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return (
    <div className="mt-8 h-40 w-11/12 rounded-2xl border shadow lg:w-[800px]">
      <Link href={`/blog/${category}/${slug}`}>
        <div className="flex h-16 w-full p-4">
          <div className="flex h-8 w-32 items-center justify-center rounded-lg bg-black3 text-sm font-bold capitalize text-white dark:bg-white dark:text-black3">
            {category}
          </div>
          <div className="flex h-8 w-full items-center justify-start pl-4 text-lg font-bold text-black3 dark:text-white">
            {title}
          </div>
        </div>
        <div className="h-16 px-4 text-base font-normal text-black3 dark:text-white">{description}</div>
        <div className="px-4 text-sm font-normal text-black3 dark:text-white">{date}</div>
      </Link>
    </div>
  );
}
