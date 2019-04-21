const initialStateNews = {
  news: [],
  activeArticle: {}
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
    default: {
      return state;
    }
  }
};
