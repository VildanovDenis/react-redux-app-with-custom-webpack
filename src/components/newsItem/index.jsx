import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setActiveArticleAction } from "../../store/action/news-action.js";

const StyledNewsItem = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 10px;
  border-bottom: 1px solid black;
`;
const StyledTitle = styled.h3`
  cursor: pointer;
`;
const StyledImageWrapper = styled.div`
  width: 33%;
`;
const StyledDescriptionWrapper = styled.div`
  width: 60%;
`;

function NewsItemComponent({ article, onClick }) {
  const { img, title, description, routingUrl } = article;
  return (
    <StyledNewsItem>
      <StyledImageWrapper>
        {img ? (
          <img src={img} alt="Картинка к новости" />
        ) : (
          <p>К сожалению изображение к новости не отстутсвтует</p>
        )}
      </StyledImageWrapper>
      <StyledDescriptionWrapper>
        <StyledTitle>
          <Link
            to={`/article/${routingUrl}`}
            onClick={_ => {
              onClick(article);
            }}
          >
            {title}
          </Link>
        </StyledTitle>
        <p>{description}</p>
      </StyledDescriptionWrapper>
    </StyledNewsItem>
  );
}

export default NewsItemComponent;
