import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Blog(props) {
  // console.log("props dari blog", props);
  const BlogCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 48px;
  `;

  const BlogHead = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
  `;
  const Author = styled.p`
    margin-left: 12px;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  `;

  const ArticleTitle = styled.h1`
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.005em;
    text-align: left;
  `;

  const ArticleShortText = styled.p`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #546071;
  `;

  const BlogBody = styled.div`
    margin-bottom: 16px;
  `;

  const BlogFooter = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
  `;

  const BlogCategory = styled.div`
    width: 78px;
    height: 28px;
    background: #e0efff;
    border-radius: 500px;
    align-items: center;

    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.005em;
    color: rgba(0, 122, 255, 1);
    text-align: center;
  `;

  return (
    <BlogCard>
      <div>
        <BlogHead>
          <Image
            src="/icons/profile.png"
            width={24}
            height={24}
            layout=""
            alt="Profile"
          ></Image>
          <Author>{props.author}</Author>
        </BlogHead>
        <BlogBody>
          <ArticleTitle>{props.title}</ArticleTitle>
          <ArticleShortText>
            Anda ingin tahu cara cek IP hosting? Selamat, Anda berada di halaman
            yang tepat! IP <br /> hosting adalah barisan angka sebagai identitas
            unik dari suatu hosting ...
          </ArticleShortText>
        </BlogBody>
        <BlogFooter>
          <div>
            <BlogCategory>Hosting</BlogCategory>
          </div>
          <div>•</div>
          <div>{props.dateUploaded}</div>
          <div>•</div>
          <div>{props.readDuration}</div>
        </BlogFooter>
      </div>
      <div>
        <Image
          src="/blog_photo.svg"
          layout=""
          width={255}
          height={164}
          alt="Blogs Photo"
        ></Image>
      </div>
    </BlogCard>
  );
}
