import fs from 'fs';
import matter from 'gray-matter';
import getPostPaths from './getPostPaths';
import dayjs from 'dayjs';
import { Post } from '@/models/Post';

const BASE_PATH = '/src/posts';

const parsePost = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf-8');
  const { data, content } = matter(file);
  const { title, description, date } = data;

  const filePath = postPath.slice(postPath.indexOf(BASE_PATH)).replace(`${BASE_PATH}/`, '').replace('.mdx', '');
  const [category, slug] = filePath.split('/');
  const url = `/blog/${category}/${slug}`;

  const formattedDate = dayjs(date).locale('ko').format('YYYY년 MM월 DD일');
  return { url, category, slug, parsedPost: { data: { title, description, date: formattedDate }, content } };
};

const getPosts = async (category?: string): Promise<Post[]> => {
  const paths: string[] = await getPostPaths(category);
  const posts = await Promise.all(paths.map((path) => parsePost(path)));

  return posts;
};

export default getPosts;
