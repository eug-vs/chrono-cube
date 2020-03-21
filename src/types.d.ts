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

export interface Developer {
  username: string;
  role: string;
}
