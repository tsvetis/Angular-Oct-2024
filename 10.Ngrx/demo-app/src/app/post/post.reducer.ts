import { All } from './post.action';
import { DOWNVOTE, EDIT, RESET, UPVOTE } from './post.type';
import { Post } from './type';

export type Action = All;

// Initial state
const defaultState = {
  text: 'I am the default text',
  likes: 0,
};

function newState(state: Post, newState: Post) {
  return { ...state, ...newState };
}

export function postReducer(state: Post, action: Action) {
  switch (action.type) {
    case DOWNVOTE:
      return newState(state, {
        likes: state?.likes != undefined ? state.likes - 1 : 0,
      });

    case UPVOTE:
      return {
        ...state,
        likes: state?.likes != undefined ? state.likes + 1 : 0,
      };

    case RESET:
      return defaultState;

    case EDIT:
      return newState(state, { text: action.payload });

    default:
      return state;
  }
}
