import styled from "styled-components";

export const Container = styled.div`
  padding-top: 80px;
  padding-left: 165px;
  padding-right: 165px;
  padding-bottom: 120px;
`;

export const BlogDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
`;

export const FilterDiv = styled.div`
  margin-top: 36px;

  h1 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0.005em;
    text-align: left;
    margin-bottom: 24px;
    margin-left: 16px;
  }
`;

export const AccordionDetailsStyles = styled.span`
  font-weight: 400;
  color: rgba(41, 56, 78, 1);
  size: 12px;
  letter-spacing: 0.07px;
  text-transform: none;
  text-decoration: none;
  line-height: 24px;
  text-alignment: left;
  line-height: 1px;
  font-size: 0px;
  transform: none;
`;

export const KategoriBlog = styled.div`
  position: sticky;
  top: 0px;
`;

export const PaginationDiv = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
