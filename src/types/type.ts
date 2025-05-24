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
