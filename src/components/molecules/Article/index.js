import React from "react";
import ArticleCategory from "../../atoms/ArticleCategory";
import Blog from "../../atoms/Blog";
import ViewAllArticleButton from "../../atoms/ViewAllArticleButton";
import { Container } from "./ArticleStyles";
import Link from "next/link";

export default function Article(props) {
  console.log("ini props di Article", props);
  console.log("data blogs", props.data[0].blogs);
  let blogs = props.data[0].blogs;
  return (
    <Container>
      <ArticleCategory title={props.data[0].category}></ArticleCategory>
      {blogs.map(
        ({
          author,
          authorImg,
          blogCategory,
          dateUploaded,
          readDuration,
          title,
          id,
        }) => (
          <a href="/article" key={id} style={{ color: "black" }}>
            <Blog
              id={id}
              key={id}
              author={author}
              authorImg={authorImg}
              blogCategory={blogCategory}
              readDuration={readDuration}
              title={title}
              dateUploaded={dateUploaded}
            ></Blog>
          </a>
        )
      )}

      <ViewAllArticleButton />
    </Container>
  );
}
