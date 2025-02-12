export interface Post {
  url: string;
  category: string;
  slug: string;
  parsedPost: {
    data: {
      title: string;
      description: string;
      date: string;
      thumbLink: string | null;
    };
    content: string;
  };
}
