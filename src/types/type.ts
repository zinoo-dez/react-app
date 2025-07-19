export interface Post {
  id?: number;
  title: string;
  published_at?: string;
  label?: string | undefined;
  imageUrl?: string;
  is_featured?: boolean;
  excerpt?: string;
  cover_image?: string;
  authorImg?: string;
  date?: string;
  category?: {
    id: string;
    name: string;
    slug: string;
  };
  createdAt?: string;
  readTime?: string;
  author?: {
    id: string;
    name: string;
    username: string;
    profile_image: string;
    date: string;
    job_title: string;
    bio: string;
  },
  tags?: {
    id: string;
    name: string;
    slug: string;
  }[];
}

export interface FeaturedPost {
  id: string;
  title: string;
  slug: string;
}

export interface CategoryType {
  description: string;
  featured_post: FeaturedPost;
  followers_count: number;
  id: string;
  name: string;
  posts_count: number;
  slug: string;
}

export type User = {
  userId?: string,
     username: string,
     email: string,
     password?: string
}