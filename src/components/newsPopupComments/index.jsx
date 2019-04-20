import React from "react";
import styled from "styled-components";

const StyledCommentWrapper = styled.div`
  width: 600px;
  padding: 10px;
  margin: 0 auto 10px;
  color: white;
`;
const StyledCommentTextarea = styled.textarea`
  width: 100%;
  min-height: 30px;
  padding: 0px;
  border: none;
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
      commentDescription: ""
    };
  }

  render() {
    return (
      <StyledCommentWrapper>
        <h4>Autor</h4>
        {this.state.editComment ? (
          <StyledCommentTextarea value={this.state.commentDescription} />
        ) : (
          <StyledCommentTextarea as="p">Comment</StyledCommentTextarea>
        )}
        <div>
          <StyledBtn type="button">Редактировать</StyledBtn>
          <StyledBtn type="button">Удалить</StyledBtn>
        </div>
      </StyledCommentWrapper>
    );
  }
}

export default CommentContainer;
