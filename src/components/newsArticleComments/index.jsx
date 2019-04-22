import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateArticleCommentAction } from "../../store/action/news-action";

export const StyledCommentWrapper = styled.div`
  width: 600px;
  padding: 20px;
  margin: 0 auto 15px;
  color: white;
  background: black;
  border-radius: 10px;
`;
export const StyledCommentTextarea = styled.textarea`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 30px;
  padding: 0px;
  margin-bottom: 5px;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  background-color: transparent;
  color: white;
`;
export const StyledBtn = styled.button`
  display: inline-block;
  margin-right: 10px;
  padding: 0;
  border: none;
  color: white;
  background-color: transparent;
`;

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editComment: false,
      comment: ""
    };

    this.onEditButtonClick = this.onEditButtonClick.bind(this);
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
    this.onSaveEditedCommentClick = this.onSaveEditedCommentClick.bind(this);
    this.onDeleteCommentClick = this.onDeleteCommentClick.bind(this);
  }

  onTextAreaChange(e) {
    const newComment = e.target.value;
    this.setState({
      comment: newComment
    });
  }

  onEditButtonClick() {
    this.setState({
      editComment: true
    });
  }

  onSaveEditedCommentClick() {
    const URL =
      "http://localhost:3500/commentsToGamesList/" + this.props.comment.id;
    const comment = {
      id: this.props.comment.id,
      comment: this.state.comment,
      game: this.props.comment.game,
      autorLogin: this.props.comment.autorLogin,
      autorId: this.props.comment.autorId
    };

    this.fetchEditedComment(URL, comment);
  }

  onDeleteCommentClick() {
    const URL =
      "http://localhost:3500/commentsToGamesList/" + this.props.comment.id;

    fetch(URL, { method: "DELETE" })
      .then(res => {
        console.log(res);
        this.props.updateComments;
      })
      .then(() => {
        this.props.onDeleteClick();
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    const { comment } = this.props.comment;

    this.setState({
      comment: comment
    });
  }

  fetchEditedComment(URL, comment) {
    fetch(URL, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    })
      .then(res => this.props.updateArticleCommentAction(res.json()))
      .then(() => {
        this.setState({
          editComment: false
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const canEdit =
      this.props.user.isAdmin ||
      this.props.user.login === this.props.comment.autorLogin;

    return (
      <StyledCommentWrapper>
        <h4>{this.props.comment.autorLogin}:</h4>
        {this.state.editComment ? (
          <StyledCommentTextarea
            value={this.state.comment}
            onChange={this.onTextAreaChange}
          />
        ) : (
          <StyledCommentTextarea as="p">
            {this.state.comment}
          </StyledCommentTextarea>
        )}
        {this.props.user.isLogin && (
          <div>
            {canEdit && (
              <React.Fragment>
                <StyledBtn
                  type="button"
                  onClick={
                    this.state.editComment
                      ? this.onSaveEditedCommentClick
                      : this.onEditButtonClick
                  }
                >
                  {this.state.editComment ? "Сохранить" : "Редактировать"}
                </StyledBtn>
                <StyledBtn type="button" onClick={this.onDeleteCommentClick}>
                  Удалить
                </StyledBtn>
              </React.Fragment>
            )}
          </div>
        )}
      </StyledCommentWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
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
)(CommentContainer);
