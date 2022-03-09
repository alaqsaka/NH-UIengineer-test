import React from "react";
import styled from "styled-components";
import Icon from "../../atoms/Icon";
import Image from "next/image";

export default function FooterIcons(props) {
  const FooterIconsDiv = styled.div`
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(3, 50px);
    grid-gap: 18px;
    margin-bottom: 30px;
  `;

  return (
    <FooterIconsDiv>
      <Icon img="icons/fb.svg"></Icon>
      <Icon img="icons/ig.svg"></Icon>
      <Icon img="icons/linkedin.svg"></Icon>
      <Icon img="icons/twitter.svg"></Icon>
      <Icon img="icons/tiktok.svg"></Icon>
      <Icon img="icons/utube.svg"></Icon>
    </FooterIconsDiv>
  );
}
