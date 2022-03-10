import React from "react";
import Breadcrumb from "../../atoms/BreadCrumb";
import ArticleHeader from "../../atoms/ArticleHeader";
import ArticleBody from "../../atoms/ArticleBody";
import ArticleFooter from "../../atoms/ArticleFooter";
import OutlinedButton from "../../atoms/OutlinedButton";
import {
  ArticleHeaderDiv,
  ArticleBodyDiv,
  ArticleFooterDiv,
} from "./ArticleDetailsStyles";

export default function ArticleDetails(props) {
  return (
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
      ArticleDetails
    </div>
  );
}
