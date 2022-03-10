import React from "react";
import { Container, Col1, Col2, Text } from "./ArticleFooterStyles";
import Image from "next/image";

export default function ArticleFooter(props) {
  return (
    <Container>
      <Col1>
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
        ></Image>
        <Text>44</Text>
      </Col1>
      <Col2>
        <Image
          src="/icons/share.svg"
          width={24}
          height={24}
          layout=""
          alt="Share"
        ></Image>
        <Text>Share</Text>
      </Col2>
    </Container>
  );
}
