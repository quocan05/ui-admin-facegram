import { IUser } from './user-interface';

export interface IPost {
  _id: string;
  author: IUser;
  images: string[];
  content: string;
  mode: string;
  comments: IComment[];
  reacts: IReact[];
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

export interface IComment {
  _id: string;
  author: IUser;
  content: string;
  __v: 0;
}

export interface IReact {
  _id: string;
  author: IUser;
  __v: 0;
}
