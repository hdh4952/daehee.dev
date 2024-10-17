import { Post } from '@/models/Post';
import Link from 'next/link';

export default function PostCardNav({ posts, selectedCategory = 'all' }: { posts: Post[]; selectedCategory?: string }) {
  const categoryCount = new Map<string, number>([['all', posts.length]]);
  posts.forEach(({ category }) => {
    if (!categoryCount.has(category)) {
      categoryCount.set(category, 1);
      return;
    }
    categoryCount.set(category, categoryCount.get(category)! + 1);
  });

  return (
    <div className="mt-8 flex h-8 w-11/12 flex-wrap justify-start lg:w-[800px]">
      {Array.from(categoryCount.entries()).map(([category, count]) => {
        const selected: boolean = selectedCategory === category;

        return (
          <Link
            key={category}
            href={`/blog/${category}`}
            className={`mr-4 rounded-lg border px-4 py-2 shadow ${selected ? 'bg-black3 text-white' : 'bg-white text-black3'}`}
          >
            {category} ({count})
          </Link>
        );
      })}
    </div>
  );
}
