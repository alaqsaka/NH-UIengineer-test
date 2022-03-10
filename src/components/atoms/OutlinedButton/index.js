import React from "react";
import styled from "styled-components";

export default function OutlinedButton(props) {
  const OutlinedButtonLink = styled.div`
    border: 1px solid rgba(255, 152, 0, 1);
    width: 100%;
    display: flex;

    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.02em;
    color: rgba(255, 152, 0, 1);

    border-radius: 40px;
    height: 56px;
    align-items: center;
    padding: 12px 64px;
  `;

  return <OutlinedButtonLink>{props.children}</OutlinedButtonLink>;
}
