import React from "react";
import Image from "next/image";
import {
  Container,
  Title,
  Text,
  Details,
  Column1,
  Column2,
} from "./ArticleHeaderStyles";

export default function ArticleHeader(props) {
  return (
    <Container>
      <Title>4+ Cara Mudah Cek IP Hosting Website</Title>
      <Details>
        <Column1>
          <Image
            src="/icons/profile.png"
            width={24}
            height={24}
            layout=""
            alt="Profile"
          ></Image>
          <Text>Nida Regita F</Text>
          <div>•</div>
          <Text>28 Dec 2021</Text>
          <div>•</div>
          <Text>5 min read</Text>
        </Column1>
        {/* likes comment share */}
        <Column2>
          <Image
            src="/icons/likes.svg"
            width={24}
            height={24}
            layout=""
            alt="Likes"
          ></Image>
          <Text>111</Text>
          <Image
            src="/icons/comments.svg"
            width={24}
            height={24}
            layout=""
            alt="Comment"
            onClick={() => setShowChat(!ShowChat)}
          ></Image>
          <Text>44</Text>
          <Image
            src="/icons/share.svg"
            width={24}
            height={24}
            layout=""
            alt="Share"
          ></Image>
          <Text>Share</Text>
        </Column2>
      </Details>
      <Image
        src="/article_header.svg"
        width={635}
        height={338}
        layout=""
        alt="Article Photo"
      ></Image>
    </Container>
  );
}
