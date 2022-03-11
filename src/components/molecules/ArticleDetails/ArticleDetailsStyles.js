import styled from "styled-components";

export const ArticleHeaderDiv = styled.div`
  margin-top: 36px;
`;
export const ArticleBodyDiv = styled.div`
  margin-top: 36px;
  margin-bottom: 36px;
`;
export const ArticleFooterDiv = styled.div`
  margin-top: 36px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 100%;
  gap: 30px;
  div {
    max-width: 635px;
  }
`;

export const SidebarArticle = styled.div`
  width: 255px;
  div {
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
  }
`;
