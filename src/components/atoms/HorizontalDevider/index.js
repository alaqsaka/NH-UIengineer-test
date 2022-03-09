import React from "react";
import styled from "styled-components";

export default function HorizontalDevider(props) {
  const Divider = styled.div`
    padding-top: 62px;
    padding-bottom: 32px;
  `;

  const HorizontalDev = styled.div`
    border-top: 1px solid #546071;
  `;

  return (
    <Divider>
      <HorizontalDev></HorizontalDev>
    </Divider>
  );
}
