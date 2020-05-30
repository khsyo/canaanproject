import { GET_EMPLOYERS } from "./types";
import axios from "axios";

// get employers
export const getEmployers = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/employerUser");

    dispatch({
      type: GET_EMPLOYERS,
      payload: res.data,
    });
  } catch (err) {}
};
