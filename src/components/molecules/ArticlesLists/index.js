import React from "react";
import { Container, Title, Contents } from "./ArticlesLists";
import VerticalBlogCard from "../../atoms/VerticalBlogCard";

export default function ArticlesList(props) {
  return (
    <Container>
      <Title>Semua Artikel</Title>
      <Contents>
        <div>
          <VerticalBlogCard />
        </div>
        <div>
          <VerticalBlogCard />
        </div>
        <div>
          <VerticalBlogCard />
        </div>
      </Contents>
    </Container>
  );
}
