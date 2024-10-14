import { MDXRemote } from 'next-mdx-remote/rsc';
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import P from './P';
import rehypePrettyCode from 'rehype-pretty-code';

export default function Post({
  title,
  description,
  date,
  content,
}: {
  title: string;
  description: string;
  date: string;
  content: string;
}) {
  return (
    <>
      <div className="my-12 border-b border-b-black3 pb-12">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="py-2 font-light">{description}</div>
        <div className="text-gray3">{date}</div>
      </div>
      <MDXRemote
        source={content}
        components={{ h1: H1, h2: H2, h3: H3, p: P }}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, { theme: 'github-light' }]],
          },
        }}
      />
    </>
  );
}
