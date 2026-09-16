export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  /** Free-form. New categories are created simply by using them in a post. */
  category: string;
  tags: string[];
  image?: string;
  published: boolean;
}

export interface Post extends PostFrontmatter {
  slug: string;
  readingTime: string;
  readingMinutes: number;
  /** Sequential number by publish date (oldest = 1), shown as KB-001. */
  number?: number;
  content: string;
}

export type PostMeta = Omit<Post, "content">;

export interface TocHeading {
  id: string;
  text: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}
