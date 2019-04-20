import React from "react";
import styled from "styled-components";

import CommentContainer from "../newsPopupComments/index.jsx";

const StyledPopupBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  max-height: 100%;
  overflow: auto;
`;
const StyledPopupWrapper = styled.div`
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  margin-bottom: 30px;
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

class NewsPopupContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, link, description, img } = this.props.article;
    return (
      <StyledPopupBg>
        <StyledContentWrapper>
          <StyledPopupWrapper>
            <StyledImg src={img} />
            <StyledDescriptionWrapper>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={link} target="_blank">
                Подробнее
              </a>
            </StyledDescriptionWrapper>
            <StyledCloseBtn type="button" />
          </StyledPopupWrapper>
          <CommentContainer />
        </StyledContentWrapper>
      </StyledPopupBg>
    );
  }
}

export default NewsPopupContainer;
