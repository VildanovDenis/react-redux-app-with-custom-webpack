export const getNewsDataAction = payload => {
  return {
    type: "GET_NEWS",
    payload
  };
};

export const setActiveArticleAction = payload => {
  return {
    type: "SET_ARTICLE",
    payload
  };
};
