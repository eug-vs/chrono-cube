export interface User {
  username: string;
  id: number | null;
}

export interface Solution {
  id: number;
  result: string;
  date: string;
  author: User;
}

