import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getNewsDataAction } from "../../store/action/news-action.js";
import {
  spinnerShowingAction,
  spinnerHidingAction
} from "../../store/action/spinner-actions.js";

import NewsItemComponent from "../newsItem/index.jsx";

const StyledNewsWrapper = styled.section`
  width: 100%;
  min-width: 900px;
  max-width: 1200px;
  padding: 50px 0;
  margin: 0 auto;
`;

class NewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const URL = "http://localhost:3500/gamesList?_page=1&_limit=5";
    this.fetchData(URL);
  }

  fetchData(URL) {
    fetch(URL, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(dataNews => {
        this.props.getNewsDataAction(dataNews);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { news } = this.props;
    return (
      <StyledNewsWrapper>
        {news.length !== 0
          ? news.map(article => {
              return (
                <NewsItemComponent
                  key={article.id}
                  img={article.img}
                  title={article.title}
                  description={article.description}
                />
              );
            })
          : null}
      </StyledNewsWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.newsReducer.news
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getNewsDataAction: getNewsDataAction,
      spinnerShowingAction: spinnerShowingAction,
      spinnerHidingAction: spinnerHidingAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsContainer);
