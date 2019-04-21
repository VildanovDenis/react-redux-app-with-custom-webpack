import React from "react";
import styled from "styled-components";

const StyledCommentWrapper = styled.div`
  width: 600px;
  padding: 20px;
  margin: 0 auto 15px;
  color: white;
  background: black;
  border-radius: 10px;
`;
const StyledCommentTextarea = styled.textarea`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 30px;
  padding: 0px;
  margin-bottom: 5px;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  background-color: transparent;
  color: white;
`;
const StyledBtn = styled.button`
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

  componentDidMount() {
    const { comment } = this.props.comment;

    this.setState({
      comment: comment
    });
  }

  render() {
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
        <div>
          <StyledBtn
            type="button"
            onClick={this.state.editComment ? null : this.onEditButtonClick}
          >
            {this.state.editComment ? "Сохранить" : "Редактировать"}
          </StyledBtn>
          <StyledBtn type="button">Удалить</StyledBtn>
        </div>
      </StyledCommentWrapper>
    );
  }
}

export default CommentContainer;
