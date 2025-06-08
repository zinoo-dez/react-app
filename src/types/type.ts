export interface Post {
  id?: number;
  title: string;
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
  }
}

 interface FeaturedPost {
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