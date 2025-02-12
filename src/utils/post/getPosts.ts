import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import getPostPaths from './getPostPaths';
import dayjs from 'dayjs';
import { Post } from '@/models/Post';

const BASE_PATH = path.join('src', 'posts');

const parsePost = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf-8');
  const { data, content } = matter(file);
  const { title, description, date, thumbnail } = data;

  const normalizedPath = path.normalize(postPath);
  const relativePath = normalizedPath
    .slice(normalizedPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}${path.sep}`, '')
    .replace('.mdx', '');

  const [category, slug] = relativePath.split(path.sep);
  const url = `/blog/${category}/${slug}`;

  const formattedDate = dayjs(date).locale('ko').format('YYYY년 MM월 DD일');

  let thumbLink = null;
  if (thumbnail) {
    thumbLink = `/images/${thumbnail}`;
  }

  return { url, category, slug, parsedPost: { data: { title, description, date: formattedDate, thumbLink }, content } };
};

const getPosts = async (category?: string): Promise<Post[]> => {
  const paths: string[] = await getPostPaths(category);
  const posts = await Promise.all(paths.map((path) => parsePost(path)));

  return posts;
};

export default getPosts;
