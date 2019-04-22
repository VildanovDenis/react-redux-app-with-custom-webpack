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

export const getArticleCommentsAction = payload => {
  return {
    type: "GET_COMMENTS",
    payload
  };
};

export const updateArticleCommentAction = payload => {
  return {
    type: "UPDATE_COMMENT",
    payload
  };
};
