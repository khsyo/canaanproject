import { GET_ALL_JOBS } from "./types";
import axios from "axios";

// get employers
export const getAllJobs = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/jobs");

    dispatch({
      type: GET_ALL_JOBS,
      payload: res.data,
    });
  } catch (err) {}
};
