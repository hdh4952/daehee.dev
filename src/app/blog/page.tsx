import PostCardList from '@/components/PostCardList';
import getPosts from '@/utils/post/getPosts';

export default async function Page() {
  const posts = await getPosts();

  return <PostCardList posts={posts} />;
}
