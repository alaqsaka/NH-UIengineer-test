import react from "react";
import styled from "styled-components";

export default function ButtonOrange(props, { children }) {
  console.log(props);

  const Button = styled.button`
    height: ${props.height + `px`};
    width: ${props.width + `px`};
    border-radius: 40px;
    padding: 12px, 64px, 12px, 64px;
    box-shadow: 0px 8px 10px rgba(255, 176, 77, 0.32);
    background: rgba(255, 152, 0, 1);
    border: none;
    color: white;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    cursor: pointer;
  `;

  return <Button>{props.children}</Button>;
}
