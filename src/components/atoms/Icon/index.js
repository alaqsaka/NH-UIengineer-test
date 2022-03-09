import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Icon(props) {
  console.log(props);
  let imgSource = "/" + props.img;
  const Icon = styled.div`
    height: 48px;
    width: 48px;
    background: rgba(84, 96, 113, 1);
    text-align: center;
    border-radius: 50%;
    display: inline-block;
    padding: 12px;
  `;

  return (
    <Icon>
      <Image
        src={imgSource}
        width={24}
        height={24}
        layout=""
        alt={props.img}
      ></Image>
    </Icon>
  );
}
