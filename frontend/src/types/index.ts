export interface IUser {
  id: string;
  name: string;
  email: string;
  address: {
    street: string;
    state: string;
    city: string;
    zipcode: string;
  };
}

export interface IPost {
  id: string;
  userId: string;
  title: string;
  body: string;
  createdAt: string;
  user_id: string;
  user: {
    name: string;
  };
}

export interface UserProfileProps {
  name: string;
  email: string;
  posts: IPost[];
}

export interface IPostState {
  posts: IPost[];
  isLoading: boolean;
  error: string | null;
}

export interface IUserState {
  users: IUser[];
  isLoading: boolean;
  error: string | null;
}

export interface IState {
  posts: IPost[];
  users: IUser[];
  loading: boolean;
  error?: string;
}

export type ActionType =
  | { type: "GET_POST"; payload: IPost[] }
  | { type: "CREATE_POST"; payload: IPost }
  | { type: "UPDATE_POST"; payload: IPost }
  | { type: "DELETE_POST"; payload: string }
  | { type: "GET_USERS"; payload: IUser[] }
  | { type: "ERROR"; payload: string };

export interface IPagination {
  total: number;
  currentPage: number;
  totalPages: number;
  limit: number;
}
export interface IPostResponse {
  success: boolean;
  data?: IPost[];
  pagination: IPagination;
}
export interface IUserResponse {
  success: boolean;
  data: IUser[];
  pagination: IPagination;
}
