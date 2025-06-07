export interface Post {
  id?: number;
  title: string;
  description: string;
  label?: string | undefined;
  imageUrl?: string;
  author?: string;
  authorImg?: string;
  date?: string;
  category?: string;
  createdAt?: string;
  readTime?: string;
  // author:{
  //   name: string;
  //   avatar: string;
  //   date: string;
  //   readTime: string;
  // }
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