import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateArticleCommentAction } from "../../store/action/news-action";

import {
  StyledCommentWrapper,
  StyledCommentTextarea,
  StyledBtn
} from "../newsArticleComments/index.jsx";

class AddCommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };

    this.onTextAreaChange = this.onTextAreaChange.bind(this);
    this.onSendCommentClick = this.onSendCommentClick.bind(this);
  }

  onTextAreaChange(e) {
    const newComment = e.target.value;

    this.setState({
      comment: newComment
    });
  }

  onSendCommentClick() {
    const sentComment = {
      game: this.props.activeArticle.routingUrl,
      autorLogin: this.props.user.login,
      autorId: this.props.user.id,
      comment: this.state.comment
    };
    const URL = "http://localhost:3500/commentsToGamesList";

    this.fetchNewComment(URL, sentComment);
  }

  fetchNewComment(URL, newComment) {
    fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newComment)
    })
      .then(res => {
        this.props.updateArticleCommentAction(res.json());
        this.props.onAddCommentClick();
        this.setState({
          comment: ""
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { isLogin } = this.props.user;
    if (!isLogin) {
      return (
        <StyledCommentWrapper>
          <span>
            <Link to="/login">Войдите</Link>, чтобы поделиться вашими
            впечатлениями
          </span>
        </StyledCommentWrapper>
      );
    }
    return (
      <StyledCommentWrapper>
        <StyledCommentTextarea
          placeholder="Оставьте ваш комментарий"
          name="newComment"
          onChange={this.onTextAreaChange}
        />
        <StyledBtn
          type="button"
          onClick={this.onSendCommentClick}
          value={this.state.comment}
        >
          Отправить
        </StyledBtn>
      </StyledCommentWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeArticle: state.newsReducer.activeArticle,
    user: state.authReducer
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateArticleCommentAction: updateArticleCommentAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCommentContainer);
