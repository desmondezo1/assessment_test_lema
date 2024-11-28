import { ActionType, IState } from "@/types";

export function reducer(state: IState, action: ActionType): IState {
  switch (action.type) {
    case "GET_POST":
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: undefined,
      };

    case "CREATE_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        error: undefined,
      };

    case "UPDATE_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
        error: undefined,
      };

    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        error: undefined,
      };

    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: undefined,
      };

    case "ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      throw new Error("Unknown action type");
  }
}
