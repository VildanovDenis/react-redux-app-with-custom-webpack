const initialStateNews = {
  news: [],
  activeArticle: {},
  comments: []
};

export const newsReducer = (state = initialStateNews, action) => {
  switch (action.type) {
    case "GET_NEWS": {
      const { payload: news } = action;
      return { ...state, news };
    }
    case "SET_ARTICLE": {
      const { payload: article } = action;
      return { ...state, activeArticle: article };
    }
    case "GET_COMMENTS": {
      const { payload: comments } = action;
      return { ...state, comments: comments };
    }
    case "UPDATE_COMMENTS": {
      const { payload: comments } = action;
      return { ...state, comments: { ...comments, comment } };
    }
    default: {
      return state;
    }
  }
};
