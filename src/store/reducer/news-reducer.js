const initialStateNews = {
  news: []
};

export const newsReducer = (state = initialStateNews, action) => {
  switch (action.type) {
    case "GET_NEWS": {
      const news = action.payload;
      return { news };
    }
    default: {
      return state;
    }
  }
};
