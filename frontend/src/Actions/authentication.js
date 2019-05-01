import axios from "axios";
import { ERRORS, SIGNUP, LOGIN_USER } from "./types";
var setData = require("../components/Localstorage").setData;

export const signupUser = (signupdata, history) => dispatch => {
  console.log("checking data in backend", signupdata);
  axios
    .post(window.base_url + "/signup", signupdata)
    .then(res => {
      console.log("this is the data from back end", res.data);
      history.push("/interests");
    })
    .catch(err => {
      dispatch({
        type: ERRORS,
        payload: err.response.data
      });
    });
};

/***** Topics interests *****/
export const topicsSelected = (topicsInterested, history) => dispatch => {
  console.log("checking data in backend topics selected", topicsInterested);
  axios
    .post(window.base_url + "/topic", topicsInterested)
    .then(res => {
      //  dispatch({
      //    type: INTERESTS,
      //    payload: res.data
      //    });
      console.log("this is the data from back end", res.data);
    })
    .catch(err => {
      // dispatch({
      //   type: ERRORS,
      //   payload: err.response.data
      // });
    });
};

/****** Login User *****/
export const loginUser = (logindata, history) => dispatch => {
  console.log("checking data in backend", logindata);
  axios
    .post(window.base_url + "/login", logindata)
    .then(res => {
      console.log("inside login back from backedn", res.data);
      dispatch({
        type: LOGIN_USER,
        payload: res.data
      });
      /***** Setting up the data in localstorage *****/
      setData(res.data.token);
      history.push("/");
    })
    .catch(err => {
      dispatch({
        type: ERRORS,
        payload: err.response.data
      });
    });
};
