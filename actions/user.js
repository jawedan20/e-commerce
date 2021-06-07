  import axios from "../utils/axios";
import * as type from "./action_types/action_type_user";
import { removeCookie } from "../utils/cookies";

export const logout = () => {
  axios
    .post("api/auth/logout/", {})
    .then((res) => {
      removeCookie("auth");
      removeCookie("cart");
      
      location.href = "/login";
    })
    .catch((err) => console.log(e));
};

export const login = (email, password) => (dispatch) => {
  const data = {
    email: email,
    password: password,
  };
  axios
    .post("api/auth/login/", JSON.stringify(data))
    .then((res) => {
      dispatch(is_login(true));
      dispatch(whoami());
    })
    .catch((err) => console.log(err.request));
};

export const is_login = (py) => (dispatch) => {
  dispatch({
    type: type.LOGIN_SUCCESS,
    payload: py,
  });
};

export const whoami = () => (dispatch) => {
  axios.get(`api/auth/whoiam/`).then((res) => {
    let data = res.data;

    const location = data.location;
  
    const user = {
      id: data.id,
      email: data.email,
      username: data.username,
      profil: data.profile,
      store: data.store,
    };

    dispatch({
      type: type.LOGIN_USER,
      payload: {
        user,
        location,
      },
    });

    

  }).catch(err => dispatch({type:type.USER_IS_UNAUTHORIZED}));
};
export const massageUser = (value) => (dispatch) => {
  dispatch({ type: "GET_SUCCESS_MASSAGE", payload: value });
};
export const UpdateUser = (access) => (dispatch) => {
  const config = {
    headers: {
      Authorization: "Bearer " + access,
    },
  };

  axios.get(`auth/me/`, config).then((res) => {
    const rawUser = res.data;
    const user = parseJwt(rawUser);

    Cookies.set("ud", rawUser);
    dispatch({
      type: "GET_SUCCESS_MASSAGE",
      payload: `Username successfuly updated`,
    });
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: user,
    });
  });
};

export const LogoutAuth = () => (dispatch) => {
  dispatch({
    type: "GET_SUCCESS_MASSAGE",
    payload: `Logout Succussfuly`,
  });
  return dispatch({
    type: "LOGOUT_SUCCESS",
  });
};

export const get_post_like = () => (dispatch) => {
  const config = {
    headers: {
      Authorization: "Bearer " + Cookies.get("access"),
    },
  };
  axios
    .get("api/post/like/", config)
    .then((res) => {
      const post = res.data.map((e) => e.post);
      dispatch({
        type: "GET_LIKE_POST",
        payload: post,
      });
    })
    .catch((e) => console.log(e.request));
};

export const get_post_save = () => (dispatch) => {
  const config = {
    headers: {
      Authorization: "Bearer " + Cookies.get("access"),
    },
  };
  axios
    .get("api/post/save/", config)
    .then((res) => {
      const post = res.data.map((e) => e.post);
      dispatch({
        type: "GET_SAVE_POST",
        payload: post,
      });
    })
    .catch((e) => console.log(e.request));
};

export const post_save = (prev, post_id) => (dispatch) => {
  dispatch({
    type: "SAVE_POST",
    payload: {
      post_id: post_id,
      prev: prev,
    },
  });
};

export const post_unsave = (prev, post_id) => (dispatch) => {
  dispatch({
    type: "UNSAVE_POST",
    payload: {
      post_id: post_id,
      prev: prev,
    },
  });
};

export const like_post_with = (prev, post_id) => (dispatch) => {
  dispatch({
    type: "LIKE_POST",
    payload: {
      post_id: post_id,
      prev: prev,
    },
  });
};
export const unlike_post_with = (prev, post_id) => (dispatch) => {
  dispatch({
    type: "UNLIKE_POST",
    payload: {
      post_id: post_id,
      prev: prev,
    },
  });
};

export const get_post_data = (data) => (dispatch) => {
  dispatch({
    type: "GET_POST_DATA",
    payload: data,
  });
};

export const get_post_save_data = () => (dispatch, getState) => {
  const config = {
    headers: {
      Authorization: "Bearer " + Cookies.get("access"),
    },
  };
  if (getState().auth.save_post_data.length === 0) {
    axios
      .get("api/save/post/", config)
      .then((res) => {
        dispatch({
          type: "GET_POST_SAVE_DATA",
          payload: res.data,
        });
      })
      .catch((e) => console.log(e.request));
  }
};
