import { Post } from '@/models/Post';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const getPostDate = (post: Post): dayjs.Dayjs => {
  const { parsedPost } = post;
  const { date } = parsedPost.data;
  dayjs.extend(customParseFormat);
  return dayjs(date, 'YYYY년 MM월 DD일', 'ko', true);
};

const comparePostDate = (postA: Post, postB: Post) => {
  const dateA = getPostDate(postA);
  const dateB = getPostDate(postB);
  return dateB.valueOf() - dateA.valueOf();
}

export default comparePostDate;
