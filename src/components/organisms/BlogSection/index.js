import React from "react";
import { Container, BlogDiv } from "./BlogSectionStyles";
import Article from "../../molecules/Article";
import { Articles, Articles2 } from "../../../constants/constants";

export default function BlogSection(props) {
  return (
    <Container>
      <BlogDiv>
        <div>
          <Article data={Articles}></Article>
          <Article data={Articles2}></Article>
        </div>
        <div>kolom2</div>
      </BlogDiv>
    </Container>
  );
}
