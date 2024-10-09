import path from 'path';
import { sync } from 'glob';

const BASE_PATH = '/src/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

const getPostPaths = async (category?: string): Promise<string[]> => {
  const folder = category || '**';
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);

  return paths;
};

export default getPostPaths;
