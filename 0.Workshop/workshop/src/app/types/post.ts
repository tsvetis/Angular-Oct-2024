import { Theme } from './theme';
import { User } from './user';

export interface Post {
  likes: string[];
  _id: string;
  text: string;
  userId: User;
  themeId: Theme;
  created_at: string;
  updatedAt: string;
  __v: number;
}
