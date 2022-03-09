import React from "react";
import { Container, BlogDiv } from "./BlogSectionStyles";
import Article from "../../molecules/Article";
import { Articles, Articles2 } from "../../../constants/constants";
import SubscriptionBanner from "../../molecules/SubscriptionBanner";
import ArticlesList from "../../molecules/ArticlesLists";

export default function BlogSection(props) {
  return (
    <Container>
      <BlogDiv>
        <div>
          <Article data={Articles}></Article>
          <Article data={Articles2}></Article>
          <SubscriptionBanner />
          <ArticlesList />
        </div>
        <div>kolom2</div>
      </BlogDiv>
    </Container>
  );
}
