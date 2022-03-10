import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  ContainerCard,
  CardHead,
  CardBody,
  CardFooter,
  CardContent,
  Author,
  ArticleTitle,
  ArticleShortText,
  CardCategory,
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
      <CardBody>
        <Image
          src="/icons/profile.png"
          alt="Profile picture"
          height={24}
          width={24}
          layout=""
        ></Image>
        <Author>Nida Regita F</Author>
      </CardBody>
      <CardContent>
        <ArticleTitle>4+ Cara Mudah Cek IP Hosting Website</ArticleTitle>
        <ArticleShortText>
          Anda ingin tahu cara cek IP hosting? Selamat, Anda berada di halaman
          yang tepat! IP hosti...
        </ArticleShortText>
      </CardContent>
      <CardFooter>
        <CardCategory>Hosting</CardCategory>
        <div>•</div>
        <div>5 min read</div>
      </CardFooter>
    </ContainerCard>
  );
}
