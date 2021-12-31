import api, { getAuthConfig } from "..";

const baseURL = '/auth';

export const selfMakeSignIn = async (userInfo) => {
  const submitData = {
    ...userInfo,
    user_type: 'A',
  }
  return api.post(`${baseURL}/sign-in`, submitData);
}

export const signOut = async () => {
  const config = getAuthConfig();
  return api.post(`${baseURL}/sign-out`, {}, config);
}

export const handleGoogleSignIn = (googleData) => {
  return api.post('/auth/google', {
    token: googleData.token,
  });
}

const AuthAPI = {
  selfMakeSignIn,
  handleGoogleSignIn,
  signOut
}

export default AuthAPI;
