import PostCardList from '@/components/PostCardList';
import PostCardNav from '@/components/PostCardNav';
import getPosts from '@/utils/post/getPosts';

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      <PostCardNav />
      <PostCardList posts={posts} />
    </>
  );
}
