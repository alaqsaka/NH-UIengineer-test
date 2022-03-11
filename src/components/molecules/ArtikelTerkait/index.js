import React from "react";
import { Container, Title, Contents } from "./ArtikelTerkaitStyles";
import VerticalBlogCard from "../../atoms/VerticalBlogCard";
export default function ArtikelTerkait(props) {
  return (
    <Container>
      <Title>Baca Artikel Terkait</Title>
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
        <div>
          <VerticalBlogCard />
        </div>
      </Contents>
    </Container>
  );
}
