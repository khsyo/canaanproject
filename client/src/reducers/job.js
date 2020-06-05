import { GET_ALL_JOBS, GET_JOB_BY_ID } from "../actions/types";

const initialState = {
  loading: true,
  jobs: {},
  job: null,
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

    case GET_JOB_BY_ID:
      return {
        ...state,
        loading: false,
        job: payload,
      };

    default:
      return state;
  }
}
