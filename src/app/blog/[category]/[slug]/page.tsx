import Post from '@/components/mdx/Post';
import getPosts from '@/utils/post/getPosts';

export const dynamicParams = false;

export async function generateStaticParams() {
  const allPosts = await getPosts();
  return allPosts.map(({ category, slug }) => ({ category, slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === params.slug);
  const { data, content } = post!.parsedPost;

  return (
    <div className="flex w-full flex-col justify-start px-4 lg:w-[1024px]">
      <Post {...data} content={content} />
    </div>
  );
}
