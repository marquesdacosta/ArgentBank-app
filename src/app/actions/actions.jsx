import axios from 'axios';

// Types d'action constants
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';
export const USER_PROFILE_FAIL = 'USER_PROFILE_FAIL';
export const USER_PROFILE_RESET = 'USER_PROFILE_RESET';
export const USER_PROFILE_UPDATE = 'USER_PROFILE_UPDATE';
export const USER_PROFILE_UPDATE_FAIL = 'USER_PROFILE_UPDATE_FAIL';

// Action de connexion
export const login = (email, password) => async (dispatch) => {
    console.log("Attempting login with email:", email);
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      'http://localhost:3001/api/v1/user/login',
      { email, password },
      config
    );
    const token = data.body.token;
    console.log("Login successful, received data:", data);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    console.log(token)
    dispatch(userProfile(token));

  } catch (error) {
    console.error("Error during login:", error);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : 'An error occurred while logging in.',
    });
  }
};


// Action de deconnexion

export const USER_LOGOUT = 'USER_LOGOUT';

export const logout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_PROFILE_RESET });
};

// Action de récupération du profil utilisateur
export const userProfile = (token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const { data } = await axios.post(
      'http://localhost:3001/api/v1/user/profile',
      { token },
      config
    )

    console.log('infos user:', data)
    dispatch({ type: USER_PROFILE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// Action de changement de l'userrName

export const changeUserName = (token, newUserName) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      'http://localhost:3001/api/v1/user/profile',
      { userName: newUserName },
      config
    );
    
    dispatch({ type: USER_PROFILE_UPDATE, payload: data });
  } catch (error) {
    console.error("Error:", error);
    dispatch({
      type: USER_PROFILE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};