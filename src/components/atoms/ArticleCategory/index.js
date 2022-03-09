import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function ArticleCategory(props) {
  console.log("ini props category", props);
  const Title = styled.h1`
    font-family: Nunito Sans;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 16px;
  `;

  const ArticleCategoryDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 36px;
  `;

  let imageSource = "/icons/Artikel_" + props.title + ".svg";
  return (
    <ArticleCategoryDiv>
      <Image
        src={imageSource}
        width={44}
        height={44}
        layout=""
        alt="Artikel Terbaru"
      />

      <Title>Artikel {props.title}</Title>
    </ArticleCategoryDiv>
  );
}
