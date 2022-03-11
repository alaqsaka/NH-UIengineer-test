import styled from "styled-components";

export const Container = styled.div`
  background: rgba(245, 250, 255, 1);
  padding: 80px 165px 80px 165px;
  align-items: center;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  div {
    max-width: 255px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  color: rgba(41, 56, 78, 1);

  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: center;
`;
