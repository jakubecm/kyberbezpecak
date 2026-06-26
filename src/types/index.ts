export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  category: Category;
  tags: string[];
  image?: string;
  published: boolean;
}

export interface Post extends PostFrontmatter {
  slug: string;
  readingTime: string;
  content: string;
}

export type Category =
  | "AppSec"
  | "Legislativa"
  | "Blue Team"
  | "Red Team"
  | "CTF"
  | "Case Study";

export const CATEGORIES: Category[] = [
  "AppSec",
  "Legislativa",
  "Blue Team",
  "Red Team",
  "CTF",
  "Case Study",
];

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
