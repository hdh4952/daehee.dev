import { Post } from '@/models/Post';
import PostCard from './PostCard';
import comparePostDate from '@/utils/post/comparePostDate';

export default function PostCardList({ posts }: { posts: Post[] }) {
  posts.sort(comparePostDate);

  return (
    <>
      {posts.map((post) => {
        const { url, category, slug, parsedPost } = post;
        const { title, description, date } = parsedPost.data;

        return (
          <PostCard key={url} category={category} title={title} description={description} date={date} slug={slug} />
        );
      })}
    </>
  );
}
