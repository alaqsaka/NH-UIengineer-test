import styled from "styled-components";

export const ContainerCard = styled.div`
  margin-bottom: 58px;
  cursor: pointer;
`;

export const CardHead = styled.div`
  height: 136px;
  width: 255px;
  display: flex;
  justify-content: flex-start;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const Author = styled.p`
  margin-left: 12px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  align-items: center;
`;

export const CardContent = styled.div`
  margin-bottom: 12px;
`;

export const ArticleTitle = styled.h1`
  //styleName: Headline - Bold/H8;
  font-family: Nunito Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.005em;
  text-align: left;
`;

export const ArticleShortText = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.02em;
  text-align: left;
  color: rgba(84, 96, 113, 1);
`;

export const CardCategory = styled.div`
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

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
