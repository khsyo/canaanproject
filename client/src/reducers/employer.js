import { GET_EMPLOYERS } from "../actions/types";

const initialState = {
  loading: true,
  employer: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EMPLOYERS:
      return {
        ...state,
        loading: false,
        employer: payload,
      };

    default:
      return state;
  }
}
