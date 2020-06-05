import { GET_ALL_JOBS, GET_JOB_BY_ID } from "./types";
import axios from "axios";

export const getAllJobs = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/jobs");

    dispatch({
      type: GET_ALL_JOBS,
      payload: res.data,
    });
  } catch (err) {}
};

export const getJobById = (jobId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/jobs/${jobId}`);
    dispatch({
      type: GET_JOB_BY_ID,
      payload: res.data,
    });
  } catch (err) {}
};
