import React from "react";
import { Container, BlogDiv } from "./BlogSectionStyles";
import Article from "../../molecules/Article";
import { Articles, Articles2 } from "../../../constants/constants";
import SubscriptionBanner from "../../molecules/SubscriptionBanner";
import ArticlesList from "../../molecules/ArticlesLists";
import Search from "../../atoms/Search";

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
        <div>
          <Search placeholder="Cari artikel blog ..." icon />
        </div>
      </BlogDiv>
    </Container>
  );
}
