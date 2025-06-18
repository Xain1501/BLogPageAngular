export interface Post {
  id: number;
  title: string;
  content: string;
  author?: string;
  date?: string;
  imageUrl?: string;
  likes: number;
  comments: string[];
}
