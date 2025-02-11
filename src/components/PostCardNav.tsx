import getPosts from '@/utils/post/getPosts';
import Link from 'next/link';

export default async function PostCardNav({ selectedCategory = 'all' }: { selectedCategory?: string }) {
  const posts = await getPosts();
  const categoryCount = new Map<string, number>([['all', posts.length]]);
  posts.forEach(({ category }) => {
    if (!categoryCount.has(category)) {
      categoryCount.set(category, 1);
      return;
    }
    categoryCount.set(category, categoryCount.get(category)! + 1);
  });

  return (
    <div className="mt-8 flex h-fit w-11/12 flex-wrap justify-start lg:w-[800px]">
      {...Array.from(categoryCount.entries()).map(([category, count]) => {
        const selected: boolean = selectedCategory === category;

        return (
          <Link
            key={category}
            href={`/blog/${category}`}
            className={`mb-2 mr-4 rounded-lg border px-4 py-2 capitalize shadow ${selected ? 'bg-black3 text-white' : 'bg-white text-black3'}`}
          >
            {category} ({count})
          </Link>
        );
      })}
    </div>
  );
}
