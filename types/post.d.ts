export interface Post {
  slug: string;
  title?: string;
  date?: string;
}

export interface PostData extends Post {
  contentHtml: string;
}
