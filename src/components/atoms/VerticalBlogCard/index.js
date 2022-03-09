import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  ContainerCard,
  CardHead,
  CardBody,
  CardFooter,
  Author,
  ArticleTitle,
  ArticleShortText,
} from "./VerticalBlogCardStyles";

export default function VerticalBlogCard(props) {
  return (
    <ContainerCard>
      <CardHead>
        <Image
          src="/blog_photo2.svg"
          width={255}
          height={136}
          layout=""
          alt="Blog poto"
        ></Image>
      </CardHead>
    </ContainerCard>
  );
}
