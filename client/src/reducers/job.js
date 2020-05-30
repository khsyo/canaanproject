import { GET_ALL_JOBS } from "../actions/types";

const initialState = {
  loading: true,
  jobs: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_JOBS:
      return {
        ...state,
        loading: false,
        jobs: payload,
      };

    default:
      return state;
  }
}
