import getPosts from '@/utils/post/getPosts';
import { MDXRemote } from 'next-mdx-remote/rsc';

export const dynamicParams = false;

export async function generateStaticParams() {
  const allPosts = await getPosts();

  return allPosts.map(({ slug }) => {
    slug;
  });
}

export default async function Page({ params }: { params: { slug: string } }) {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === params.slug);
  const { data, content } = post!.parsedPost;

  return (
    <div className="px-4">
      <div>{data.title}</div>
      <div>{data.description}</div>
      <div>{data.date.toString()}</div>
      ---------------------------------
      <MDXRemote source={content} />
      <p>{content}</p>
    </div>
  );
}
