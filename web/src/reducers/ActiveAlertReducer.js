import { SELECT_ALERT, ERROR_ALERT } from '../actions/Alert';

export default function (state = null, action) {
  switch (action.type) {
    case ERROR_ALERT:
      const { message, error } = action.payload;

      return {
        ...state,
        message,
        error
      };
    case SELECT_ALERT:
      return action.payload;
    default:
      return state;
  }
}
