import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  setActiveArticleAction,
  getArticleCommentsAction
} from "../../store/action/news-action";
import {
  spinnerShowingAction,
  spinnerHidingAction
} from "../../store/action/spinner-actions.js";

import CommentContainer from "../newsArticleComments/index.jsx";
import AddCommentContainer from "../newsArticleAddComment/index.jsx";

const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0;
  max-height: 100%;
`;
const StyledArticleWrapper = styled.div`
  width: 600px;
  margin: 0 auto 15px;
  border-radius: 10px;
  background-color: black;
  color: white;
`;
const StyledImg = styled.img`
  border-radius: 10px 10px 0 0;
`;
const StyledDescriptionWrapper = styled.div`
  padding: 20px;
`;
const StyledCloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  background-color: transparent;
  border: none;
  ::before {
    content: "X";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

class NewsArticleInfoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onDeleteOrAddCommentBtnClick = this.onDeleteOrAddCommentBtnClick.bind(
      this
    );
  }

  componentDidMount() {
    const locationPathname = this.props.match.params.routingUrl;
    const URL =
      "http://localhost:3500/gamesList?routingUrl=" + locationPathname;
    const commentsURL =
      "http://localhost:3500/commentsToGamesList?game=" + locationPathname;

    if (this.props.activeArticle.title === undefined) {
      this.props.spinnerShowingAction();
      this.fetchArticleData(URL);
      this.fetchCommentsData(commentsURL);
    } else {
      this.props.spinnerShowingAction();
      this.fetchCommentsData(commentsURL);
    }
  }

  onDeleteOrAddCommentBtnClick() {
    const locationPathname = this.props.match.params.routingUrl;
    const commentsURL =
      "http://localhost:3500/commentsToGamesList?game=" + locationPathname;
    this.fetchCommentsData(commentsURL);
  }

  fetchArticleData(URL) {
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
      .then(data => {
        this.props.setActiveArticleAction(data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchCommentsData(URL) {
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
      .then(data => {
        this.props.getArticleCommentsAction(data);
        this.props.spinnerHidingAction();
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { title, link, description, img } = this.props.activeArticle;
    const { comments } = this.props;
    if (this.props.activeArticle.title === undefined) {
      return <div />;
    }
    return (
      <StyledContentWrapper>
        <StyledArticleWrapper>
          <StyledImg src={img} />
          <StyledDescriptionWrapper>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank">
              Подробнее
            </a>
          </StyledDescriptionWrapper>
          <StyledCloseBtn type="button" />
        </StyledArticleWrapper>
        {comments.map(comment => {
          return (
            <CommentContainer
              key={comment.id}
              comment={comment}
              onDeleteClick={this.onDeleteOrAddCommentBtnClick}
            />
          );
        })}
        <AddCommentContainer
          onAddCommentClick={this.onDeleteOrAddCommentBtnClick}
        />
      </StyledContentWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeArticle: state.newsReducer.activeArticle,
    comments: state.newsReducer.comments
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setActiveArticleAction: setActiveArticleAction,
      getArticleCommentsAction: getArticleCommentsAction,
      spinnerShowingAction: spinnerShowingAction,
      spinnerHidingAction: spinnerHidingAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsArticleInfoContainer);
