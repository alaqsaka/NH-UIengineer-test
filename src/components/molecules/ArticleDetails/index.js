import React from "react";
import Breadcrumb from "../../atoms/BreadCrumb";
import ArticleHeader from "../../atoms/ArticleHeader";
import ArticleBody from "../../atoms/ArticleBody";
import ArticleFooter from "../../atoms/ArticleFooter";
import OutlinedButton from "../../atoms/OutlinedButton";
import Image from "next/image";

import {
  ArticleHeaderDiv,
  ArticleBodyDiv,
  ArticleFooterDiv,
  Container,
  SidebarArticle,
  NavLink,
  SidebarTitle,
  SidebarAuthor,
  SidebarBreadcrumb,
  Text,
  SidebarDetails,
  Devider,
  LikesCommentsShare,
} from "./ArticleDetailsStyles";

export default function ArticleDetails(props) {
  return (
    <Container>
      <SidebarArticle>
        <div>
          <SidebarBreadcrumb>
            <NavLink>Home</NavLink>
            <Image
              src="/icons/chevron-right.svg"
              alt="Arrow right"
              width={4.16}
              height={6.99}
              layout=""
            ></Image>
            <NavLink>Tutorial</NavLink>
            <Image
              src="/icons/chevron-right.svg"
              alt="Arrow right"
              width={4.16}
              height={6.99}
              layout=""
            ></Image>
            <NavLink>Hosting</NavLink>
          </SidebarBreadcrumb>
          <SidebarTitle>4+ Cara Mudah Cek IP Hosting Website</SidebarTitle>
          <SidebarAuthor>
            <Image
              src="/icons/profile.png"
              width={24}
              height={24}
              layout=""
              alt="Profile"
            ></Image>
            <Text>Nida Regita F</Text>
          </SidebarAuthor>
          <SidebarDetails>
            <Text>28 Dec 2021</Text>
            <div>•</div>
            <Text>5 min read</Text>
          </SidebarDetails>
          <Devider />
          <LikesCommentsShare>
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
            <Image
              src="/icons/share.svg"
              width={24}
              height={24}
              layout=""
              alt="Share"
            ></Image>
            <Text>Share</Text>
          </LikesCommentsShare>
        </div>
      </SidebarArticle>
      <div>
        <Breadcrumb></Breadcrumb>
        <ArticleHeaderDiv>
          <ArticleHeader />
        </ArticleHeaderDiv>
        <ArticleBodyDiv>
          <ArticleBody></ArticleBody>
        </ArticleBodyDiv>
        <OutlinedButton>
          Berlangganan Hosting Niagahoster Sekarang Juga!
        </OutlinedButton>
        <ArticleFooterDiv>
          <ArticleFooter />
        </ArticleFooterDiv>
      </div>
    </Container>
  );
}
