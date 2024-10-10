import PostCardList from '@/components/PostCardList';
import getPosts from '@/utils/post/getPosts';

export const dynamicParams = false;

export async function generateStaticParams() {
  const categorySet = new Set<string>();

  const allPosts = await getPosts();
  allPosts.forEach(({ category }) => {
    categorySet.add(category);
  });

  const categories: string[] = Array.from(categorySet);

  return categories.map((category) => ({ category }));
}

export default async function Page({ params }: { params: { category: string } }) {
  const { category } = params;
  const posts = await getPosts(category);

  return <PostCardList posts={posts} />;
}
