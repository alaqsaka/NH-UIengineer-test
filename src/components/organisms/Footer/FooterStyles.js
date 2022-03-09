import styled from "styled-components";

export const FooterContainer = styled.div`
  background: rgba(34, 39, 60, 1);
  padding-top: 96px;
  padding-left: 165px;
  padding-right: 165px;
  padding-bottom: 42px;
  color: #fff;
`;

export const FooterColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Column1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ListTitle = styled.p`
  font-family: Nunito Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
`;

export const ListItem = styled.li`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: rgba(169, 175, 184, 1);
  margin-bottom: 2px;
  cursor: pointer;
`;

export const Column2 = styled.div``;

export const MissionText = styled.p`
  margin-top: 16px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: left;
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Row2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputBerlangganan = styled.div`
  display: flex;
  gap: 12px;
`;
