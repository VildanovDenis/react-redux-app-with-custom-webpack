export const userLoginAction = payload => {
  return {
    type: "LOGIN",
    payload
  };
};

export const userLogoutAction = () => {
  return {
    type: "LOGOUT"
  };
};
