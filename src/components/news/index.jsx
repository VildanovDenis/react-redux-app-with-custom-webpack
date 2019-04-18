import React from "react";
import styled from "styled-components";

import NewsItemComponent from "../newsItem/index.jsx";

const StyledNewsWrapper = styled.section`
  width: 100%;
  min-width: 900px;
  max-width: 1200px;
  margin: 0 auto;
`;

const obj = {
  title: 1234,
  img: 11234,
  description:
    "asdzxcvsadasdasfz asdzxcvsadasdasfzasdzxcvsadasdasfzasdzxcvsadasdasfzasdzxcvsadasdasfz asdzxcvsadasdasfzasdzxcvsadasdasfzasdzxcvsadasdasfz asdzxcvsadasdasfzasdzxcvsadasdasfz"
};

class NewsContainer extends React.Component {
  render() {
    return (
      <StyledNewsWrapper>
        <NewsItemComponent
          title={obj.title}
          img={obj.img}
          description={obj.description}
        />
        <NewsItemComponent
          title={obj.title}
          img={obj.img}
          description={obj.description}
        />
        <NewsItemComponent
          title={obj.title}
          img={obj.img}
          description={obj.description}
        />
      </StyledNewsWrapper>
    );
  }
}

export default NewsContainer;
